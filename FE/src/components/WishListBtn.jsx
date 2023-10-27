import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faCartShopping, faBars, faTruck, faShop, faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
export function WishListBtn(){
    return(
        <button><FontAwesomeIcon className='btn' icon={faHeart}/></button>
    )
}