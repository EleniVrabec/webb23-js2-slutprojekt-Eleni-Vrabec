import React, { useState } from 'react';
import { ProductCards } from "./ProductCards";

export function Products({
  productsRef, 
  handleSizeChange, 
  addToCart, 
  products, 
  selectedSize, 
  setSelectedSize }) 
  {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 4)); 
  const [showAll, setShowAll] = useState(false);
  const [sortOrder, setSortOrder] = useState(""); 


  const handleSortChange = (value) => {
    setSortOrder(value);

    let sortedProducts = [...products]; //makes a copy of the products array to avoid directly modifying the original array
    if(value === "lowToHigh"){
        sortedProducts.sort((a,b) => a.price - b.price)
    }else if(value === "highToLow"){
        sortedProducts.sort((a,b) => b.price - a.price)
      
    }
    setVisibleProducts(sortedProducts)
  }

 
  const handleShowAll = () => {
    if (showAll) {
      setVisibleProducts(products.slice(0, 5)); 
    } else {
      setVisibleProducts(products); 
    }
    setShowAll(!showAll); 
  };

  return (
    <>
    <div id="products" productsRef={productsRef} className="products">
      <h2 className='h2-show-all'>All products</h2>

      <button className='btn-show-all' onClick={handleShowAll}>
        {showAll ? "Show Less:" : "Show All:"}
      </button>

      <select className='sort-by' onChange={(e) => handleSortChange(e.target.value)} > 
        <option value="">Sort by:</option>
        <option value="lowToHigh">Lowest price</option>
        <option value="highToLow">Highest price</option>
       </select>

      <div className="product-container">
        {visibleProducts.map((product) => (
          <div className={'product-card' + (product.stock === 0 ? ' out-of-stock' : '')} key={product.id}>
            <ProductCards
              handleSizeChange={handleSizeChange}
              selectedSize={selectedSize.size}
              setSelectedSize={setSelectedSize}
              addToCart={addToCart}
              id={product.id}
              img={product.img}
              name={product.name}
              description={product.description}
              price={product.price}
              size={product.size}
              color={product.color}
              stock={product.stock}
            />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}






