import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faCartShopping, faBars, faTruck, faShop, faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { UserBtn } from './UserBtn';
import { WishListBtn } from './WishListBtn';
import { CartBtn } from './CartBtn';
import{Cart} from "./Cart"
import{UserLogIn} from "./UserLogIn"
import { useState } from 'react';


export function BtnContainer({
    getProducts, 
    deleteItem, 
    setProducts, 
    clearCart, 
    selectedSize, 
    products, 
    addToCart, 
    cartProducts}){
     
    const [showCart, setShowCart] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    function handleClick(){
        setShowCart(true);    
    }
    function handleClickUser(){
        setShowLogin(true);    
    }
   
    
    return(
        <div className="buttons">
            <UserBtn
           onClick={handleClickUser}
           showCart={showLogin}
           />
           {showLogin && <UserLogIn  
           onClose = {() => setShowLogin(false)}
           onLogin={() => setShowCart(true)} />}

           <WishListBtn/>
           <CartBtn 
           showCart={showCart}
           cartProducts={cartProducts}
           onClick={handleClick}/>   

           {showCart && <Cart 
           getProducts={getProducts} 
           deleteItem={deleteItem} 
           setProducts={setProducts} 
           clearCart={clearCart} 
           selectedSize={selectedSize} 
           onClose = {() => setShowCart(false)} 
           products={cartProducts} 
           addToCart={addToCart}  />}
        </div>
    )
}