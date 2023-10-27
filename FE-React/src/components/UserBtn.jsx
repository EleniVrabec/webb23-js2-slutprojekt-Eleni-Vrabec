import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faCartShopping, faBars, faTruck, faShop, faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
export function UserBtn({onClick, showCart}){
    return(
        <button onClick={onClick}
        ><FontAwesomeIcon className='btn' icon={faUser}/></button>
    )
}