export function Error({errorMessage}){
    return(
        <>
        <div className="error">
            <h3>{errorMessage||"Something went wrong...."}</h3>
        </div>
        
        </>
    )
}