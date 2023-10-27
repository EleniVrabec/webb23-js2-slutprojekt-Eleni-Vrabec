
  export function Categories({selectedCategory, setSelectedCategory, productsRef}){
    function clickHandler(e){
      e.preventDefault();
      setSelectedCategory(e.target.innerText)
      if (productsRef && productsRef.current) {
        productsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    return(
        <>
        <div className="categories">
        <ul>
            <li onClick={clickHandler}>Kids</li>
            <li onClick={clickHandler}>Men</li>
            <li onClick={clickHandler}>Women</li>
            <li onClick={clickHandler}>Accessories</li>
        </ul>
        </div>
        
        </>
    )
}  



 

