import { LeatestSearch } from "./LeatestSearch"
import { SearchForm } from "./SearchForm"
import { useState } from "react";

export function SearchContainer({updateErrorMessage, setSearchWord, products}){
    const [latestSearch, setLatestSearch] = useState([]);
    return(
        <>
         <div className="search-container">
            <SearchForm  
            updateErrorMessage={updateErrorMessage} 
            products={products} 
            setSearchWord= {setSearchWord}  
            setLatestSearch={setLatestSearch} 
            latestSearches={latestSearch}/>
          {  <LeatestSearch 
          latestSearch={latestSearch} 
          setSearchWord= {setSearchWord}/> }

         </div>
        
        </>
    )
}