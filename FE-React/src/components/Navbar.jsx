import { BtnContainer } from "./BtnContainer";
import { Categories } from "./Categories";
import { Logo } from "./Logo";
import { SearchContainer } from "./SearchContainer";

export function Navbar({
    getProducts, 
    deleteItem, 
    setProducts, 
    clearCart, 
    selectedSize, 
    cartProducts, 
    addToCart, 
    products, 
    setSearchWord, 
    selectedCategory, 
    setSelectedCategory,
    updateErrorMessage,
    productsRef
}){
    

    
    return(
        <>
        <div className="navbar">
        <Categories 
        productsRef={productsRef}
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}/>
        <Logo/>
        <SearchContainer 
       updateErrorMessage={updateErrorMessage}
        products={products}
        setSearchWord= {setSearchWord}/>
        <BtnContainer 
        getProducts={getProducts} 
        deleteItem={deleteItem} 
        setProducts={setProducts} 
        clearCart={clearCart} 
        selectedSize={selectedSize}  
        cartProducts={cartProducts} 
        addToCart={addToCart} 
        products={products}/>
        </div>
        
        </>
    )
}



