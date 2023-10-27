import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faCartShopping, faBars, faTruck, faShop, faBox, faBoxOpen, faSearch } from '@fortawesome/free-solid-svg-icons';

export function SearchForm({updateErrorMessage, setSearchWord, setLatestSearch, latestSearches, products}){
    let tempWord = "";
    function handleChange(e){
        tempWord = e.target.value;
    }
    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
    
        setSearchWord(tempWord);

        const specificName = products.filter(product => product.name.toLowerCase().includes(tempWord.toLowerCase));
        if (specificName.length === 0 ){
            console.log("Setting error message in SearchForm");
           updateErrorMessage("Product not found for the given search term. Please try again!")
        }
       /*  latestSearches.push(tempWord);
        if(latestSearches.length > 5) latestSearches.shift();
        setLatestSearch(latestSearches) */
       
        
    }
    return(
        <>
        <form className="search-form" onSubmit={handleSubmit}>
            
            <input className='input' type="text" placeholder='Search by name...' onChange={handleChange}/>
            <button className='search-btn'><FontAwesomeIcon icon={faSearch}/></button>
           {/*  {latestSearches.map((search, index)=>(
                <div key={index} className='dropdown-item'>
                    {search}
                </div>
            ))} */} 
        </form>
        
        </>



    )
}