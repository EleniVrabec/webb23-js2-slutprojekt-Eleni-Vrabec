const express = require("express");// importerar express från node_modules
const cors = require("cors"); 
const fs = require("fs");
const _ = require("underscore");

const app = express();
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:1234', // Replace with your React app's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


  /* ------------------------------------------------------------------------------------------------------------------------------------ */

  app.get("/products", (req, res) => {
    let body = [];
  
    try {
      const rawData = fs.readFileSync("./data/products.json");
      const products = JSON.parse(rawData);
      console.log(req.query)
  
      if (req.query.title !== undefined || req.query.category !== undefined) {
        // Lowercase the query parameters
        const queryTitle = req.query.title ? req.query.title.toLowerCase() : "";
        //const queryCategory = req.query.category ? req.query.category.toLowerCase() : "";
        const queryCategory = req.query.category ? req.query.category : "";
  
        products.forEach((product) => {
          const productName = product.name.toLowerCase();
          //const productCategory = product.categories.toLowerCase();
         const productCategory = product.categories;
  
          // Check if either the title or category matches the query
          if ((queryTitle && productName.includes(queryTitle)) || (queryCategory && productCategory.includes(queryCategory))) {
            body.push(product);
          }
        });
      } else {
        body = products;
      }
    } catch (e) {
      console.error('Error reading or parsing products.json:', e);
      body = { error: "Something went wrong" };
    }
    res.send(body);
  });
  
  


/* -------------------------------------------------------------------------------------------------- */

app.patch("/products/:productId", (req, res) => {
  
  const productId = parseInt(req.params.productId);
  const decreaseAmount = parseInt(req.body.decreaseAmount);

  try{
    const rawData = fs.readFileSync("./data/products.json");
    const products = JSON.parse(rawData);

    const productIndex = products.findIndex(product => product.id === productId);

    if(productIndex !== -1){
      if(products[productIndex].stock >= decreaseAmount){
        products[productIndex].stock -= decreaseAmount;

        fs.writeFileSync("./data/products.json", JSON.stringify(products, null, 2));

        res.send({message: `Stock decreased by ${decreaseAmount} units`})
      }else {
        res.status(400).send({ error: "Not enough stock available." });
      }
    }
    else {
        res.status(404).send({ error: "Product not found." });
      }
    }catch(e){
      console.error('Error reading or parsing products.json:', e);
      res.status(500).send({ error: "Something went wrong" });
    }
  

})

/* -----------------------------------------sign up------------------------------------------------- */
app.get("/users", (req, res) => {
  const rawData = fs.readFileSync("./data/users.json");
  const users = JSON.parse(rawData);
  res.send(users);
})

app.post("/users", (req, res) => {
  const user = req.body;
  const rawData = fs.readFileSync("./data/users.json")
    const users =JSON.parse(rawData);
    const userExists = users.some((existingUser) => existingUser.email === user.email);
    if (userExists) {
      res.status(400).json({ error: "User with the same email already exists" });
    } else {
    users.push(user);
    fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));
    res.send(user);}
})

/* --------------------- log In ----------------------------- */

app.get("/users/:email", (req, res) => {
  const { email } = req.params;
  const rawData = fs.readFileSync("./data/users.json");
  const users = JSON.parse(rawData);
  const user = users.find((u) => u.email === email);
  if (user) {
    res.status(200).json({ name: user.name });
  } else {
    res.status(404).json({ error: "User not found. Please sign up." });
  }
});


app.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  const rawData = fs.readFileSync("./data/users.json");
  const users = JSON.parse(rawData);
  const user = users.find((u) => u.email === email && u.password === password);
  user.isLoggedIn = true;
  if (user) {
    res.status(200).json({ name: user.name }); 
  } else {
    res.status(401).json({ error: "Invalid email or password" }); 
  }
});


app.listen(4000, ()=>{
    console.log("listening on port 4000...");
})






































