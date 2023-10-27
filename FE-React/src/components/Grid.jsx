import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ProductCards } from './ProductCards';
import { Products } from './Products';

export function Grid({products}){
    
    return(
        <>
         <div className="category">
            <h2>The details make the whole pop!</h2>
            <div className="psecondCategory">
            <p>Combine a neutral base with bold patterns and strong accent colors. It's an easy way to get a more vibrant personal style. We love it!</p>
            <button>Explore all products</button>
            </div>
        </div>
        
        
    <div className="container">
         <div className="pic-1">
             <img src="https://images.pexels.com/photos/6617765/pexels-photo-6617765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
             <div id="price">
                 <div style={{borderRight: "1px solid lightgrey", paddingRight: "25px"}} className="leftContent">
                 <p style={{color:"#6c4ff7"}}>New</p>
              </div>
            <div id="rightContent"><FontAwesomeIcon id='icon-arrow' icon={faArrowRight} /></div>
          </div>
        </div>

  <div className="pic2">
    <img src="https://images.pexels.com/photos/10812162/pexels-photo-10812162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
  </div>

  <div className="pic3">
    <img src="https://images.pexels.com/photos/6626075/pexels-photo-6626075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
  </div>

  <div className="pic4">
    <img src="https://images.pexels.com/photos/3746152/pexels-photo-3746152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
  </div>

  <div className="pic5">
    <img src="https://images.pexels.com/photos/7585607/pexels-photo-7585607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
  </div>
 
  </div>
         
  </>
    )
}