import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faCartShopping, faBars, faTruck, faShop, faBox, faBoxOpen, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export function CartBtn({onClick, cartProducts}){
    const numOfProducts = cartProducts.length;
    return(
        <button className='cart-btn' onClick={onClick}><FontAwesomeIcon className='btn' icon={faShoppingCart}/>
         {numOfProducts > 0 && ( // Render the number span only if numOfProducts is greater than 0
        <span className='cart-count changed'>{numOfProducts}</span>
      )}
       
        </button>
    )
}

