
import { AddToCartBtn } from "./AddToCartBtn"
import { useState } from "react";
export function ProductCards({
  handleSizeChange, 
   selectedSize, 
   setSelectedSize,  
  addToCart,
  id, 
  img, 
  name, 
  description, 
  price, 
  size, 
  color, 
  stock})
  {
    
    const [localSelectedSize, setLocalSelectedSize] = useState(""); // Local state for selected size
    
    const handleLocalSizeChange = (newSize) => {
       setLocalSelectedSize(newSize); // Update the selected size for this product
       handleSizeChange(id, newSize); // Propagate the change to the parent component
    };

    
   const productData =  {
    id,
    img,
    name,
    description,
    price,
    size:localSelectedSize ,
    color,
    stock
  };
    console.log(`product data: ${JSON.stringify(productData)}`)

    
    return(
        <>
        <img className="product-img" src={img} alt="" />
        <p className="p-id-productCard">{id}</p>
        <h3 className="product-name">{name}</h3>
        <h4 className="product-price" >{price}</h4>
        <h6 className="product-description">{description}</h6>
        <h6 className="product-description" >In stock: {stock}</h6>
       
       <select name="" id="" value={localSelectedSize} onChange={(e) => handleLocalSizeChange(e.target.value) }>
            <option value="">Choose size</option>
            
            {size.map((s) => (
             <option key={s} value={s}>
            {s}
          </option>
        ))}
        </select>

        
        {<AddToCartBtn onClick={() => addToCart(productData)} />}
        </>
    )
}