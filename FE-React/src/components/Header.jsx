import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faCartShopping, faBars, faTruck, faShop, faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from './Navbar';
import { LeatestSearch } from './LeatestSearch';
import { useState } from 'react';

export function Header({
     updateErrorMessage, 
     getProducts, 
     deleteItem, 
     setProducts, 
     clearCart, 
     selectedSize, 
     numOfProducts, 
     cartProducts, 
     addToCart, 
     products, 
     setSearchWord, 
     selectedCategory, 
     setSelectedCategory,
     productsRef
    
    }){
   
    
    return(
        <>
        <div className='header'>
        <div className="usp"> <p><FontAwesomeIcon icon={faTruck}/>  Free shipping || Free returns <FontAwesomeIcon icon={faBoxOpen}/></p></div>
        <Navbar 
        productsRef={productsRef}
        updateErrorMessage={updateErrorMessage}
        getProducts={getProducts}
        deleteItem={deleteItem} 
        setProducts={setProducts} 
        clearCart={clearCart} 
        selectedSize={selectedSize}  
        numOfProducts={numOfProducts} 
        cartProducts={cartProducts} 
        addToCart= {addToCart} 
        products={products} 
        setSearchWord= {setSearchWord} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} />
        </div>
        </>
    )
}