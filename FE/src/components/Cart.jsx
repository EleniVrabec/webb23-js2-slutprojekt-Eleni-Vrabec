import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

export function Cart({
  getProducts, 
  deleteItem, 
  setProducts, 
  clearCart, 
  selectedSize, 
  products, 
  onClose, 
  addToCart}){
   
    const [message, setMessage] = useState('Your cart is empty. But it doesnt have to be 🚀...'); // State to manage the message
    const [checkoutMade, setCheckoutMade] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const cartStyle = {
        position: 'fixed',
        top: '2%', 
        right: '10px', 
        background: 'lightgrey',
        width: "31%",
        padding:"20px",
        borderRadius: "20px",
        zIndex: 999, 
        height:"100vh",
        overflowY: 'scroll',
        
      }; 
  
      const isEmpty = products.length === 0;
      
      //function to delete an item from the cart 
      const handleCheckout = async () => {
        if(!isEmpty) {
            try {
                for(let product of products){
                    const response = await fetch(`http://localhost:4000/products/${product.id}/`,
                    {
                        method: "PATCH",
                        headers:{
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({decreaseAmount: 1 })
                    } 
                    );
                    if (response.ok) {
                        console.log("Successfully decreased stock for the product") 
                       getProducts();
                        
                      } else {
                        console.log("ERROR Desreacing product")   
                      }
                    }
                      clearCart();
                        setMessage('Congratulations on your successful purchase! 🎉');
                         setCheckoutMade(true);                
            }catch (error) {
                // Handle network errors or other issues
                console.error('Error during checkout:', error);
                setMessage('An error occurred during checkout.');
        }
      }else {
        setMessage('Empty cart 🛒. Go back to add items.');
      }
    }

      const handleCancel = () => {
        clearCart(); // Clear the cart
        setMessage('Your cart is empty. Go back to add items.');
      };
    return(
        <>
        <div style={cartStyle}>
            <h2 className="cart-h1">Shoping Cart</h2>
            <button className='btn-X' onClick={onClose}><FontAwesomeIcon  icon={faXmark}/></button>
             {isEmpty ? (
              <div>
               <h1 className="mess-cart">{message}</h1> 
                <button className="return-to-products-btn" onClick={onClose}>Return to products</button>
              </div>
            ) : (
             <div className="card-in-cart">
                <ul className="ul-element-cart"> 
                    {products.map((product, index) => (
                        <li className="li-in-cart" key={index}>
                           <img className="img-cart" src={product.img} alt={product.name} />  <br /> 
                           {product.name} <br />
                           ${product.price} <br /> 
                           {product.size}  <br />
                           Color: {product.color}  <br />
                           In stock: {product.stock}
                         
                          <button className="delete-item-btn" onClick={() => deleteItem(product.id)}><FontAwesomeIcon  icon={faTrash}/></button>
                        </li>
                    ) )}
                    </ul> 
                    <p>Total price: $
                      {products.reduce((total, product)=>  total + product.price, 0)}</p>                          
                    </div>
            )}
            <button className="checkout" onClick={handleCheckout}>Checkout</button>          
            <button className="cancel-cart"  onClick={handleCancel} >Cancel</button>         
        </div>        
        </>
    )
}







