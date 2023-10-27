
export function AddToCartBtn({onClick, productData }){
    const handleAddToCart = ()=>{
        if(productData)
         console.log("btn clicked")  
          onClick(productData);
         
        }
    return(
        <button   onClick={handleAddToCart} className="add-cart">Add to cart</button>
    )
}

