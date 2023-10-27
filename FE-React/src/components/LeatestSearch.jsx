
export function LeatestSearch({latestSearch, setSearchWord}){
    function handleClick(e){
    
        if(e.target.tagName === "P"){
            setSearchWord(e.target.innerText)
        }
       }
    return(
        <div  onClick={handleClick} className="latest-searches">
            <p>{latestSearch[0]}</p>
            <p>{latestSearch[1]}</p>
            <p>{latestSearch[2]}</p>
            <p>{latestSearch[3]}</p>
            <p>{latestSearch[4]}</p>
            <p>{latestSearch[5]}</p>
            <p>{latestSearch[6]}</p>

        </div>
    )
}