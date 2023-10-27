
import { useEffect, useState } from "react";
import React, { useRef } from 'react';
import { Header } from "./Header";
import { Main } from "./Main";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Footer } from "./Footer";

export function App(){
    const productsRef = useRef(null);
    const [status, setStatus] = useState("ok");
    const [products, setProducts] = useState([])
    const [searchWord, setSearchWord] = useState("") // state to manage search by title
    const [selectedCategory, setSelectedCategory] = useState(""); // state to manage search by category
    const [cartProducts, setCartProducts] = useState([]) // state to add product in cart
    const [selectedSize, setSelectedSize] = useState([]); // State to manage selected size
    const [errorMessage, setErrorMessage] = useState(null);

    const updateErrorMessage = (message) => {
      setErrorMessage(message);
      console.log("App component updateErrorMessage:", message);
    };
    
    const handleSizeChange = (productId, newSize) => {
       const updatedCartProducts = cartProducts.map((product) => {
          if (product.id === productId) {
            // Update the size for the specific product
            return { ...product, size:newSize };
          }
           return product;
        });
        setCartProducts(updatedCartProducts);
        setSelectedSize(newSize)
      };
     
    const addToCart = (product) => {
      if(product.stock > 0){
      setCartProducts([...cartProducts, product])
      } else{
        updateErrorMessage("Out of stock")
      }
    };

    const clearCart = () => {
      setCartProducts([])
    
      };

    const deleteItem = (productId) =>{ 
      const updatedProducts = cartProducts.filter((product) => product.id !== productId); 
      setCartProducts(updatedProducts)
   
      };   
   
 async function getProducts(){
    setStatus("loading")
       
     let apiUrl = `http://localhost:4000/products`;

     // Create an object to hold the query parameters
     const queryParams = {};

    if (searchWord) {
    // Include the title query parameter if searchWord of selectedCategory is defined
    queryParams.title = searchWord;
    }
   if (selectedCategory) {
    queryParams.category = selectedCategory;
    }

    // Construct the final URL by adding query parameters
    const url = `${apiUrl}?${new URLSearchParams(queryParams).toString()}`;
        
        try{
            const res = await fetch(url);
            const data = await res.json();

            if(data.length === 0){
                throw "Error"
            }else{
                setProducts(data);//set the data from the API response to the products state   
                setStatus("ok")
                /* console.log(data) */
            }
        }catch(error){
            /* console.log(error) */
            setStatus("error")
        }
    }

    
    useEffect(()=>{
        getProducts();
    },[searchWord, selectedCategory])

    
    return(
        <>
        <Header
        productsRef={productsRef}
        getProducts={getProducts} 
        deleteItem={deleteItem} 
        setProducts={setProducts} 
        clearCart={clearCart} 
        selectedSize={selectedSize} 
        cartProducts={cartProducts} 
        addToCart={addToCart} 
        products={products} 
        setSearchWord= {setSearchWord} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
        updateErrorMessage={updateErrorMessage}
        />

        { status === "loading" && <Loading/> }

        { status === "error" &&  <Error errorMessage={errorMessage}/>}

        {status === "ok" && <Main 
        productsRef={productsRef}
        handleSizeChange={handleSizeChange} 
        selectedSize={selectedSize} 
        setSelectedSize={setSelectedSize} 
        addToCart={addToCart} 
        products={products} /> }
        
        <Footer/> 
        </>
    )
}