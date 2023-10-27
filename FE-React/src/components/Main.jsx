
import HeroSection from "./HeroSection";
import { ProductCards } from "./ProductCards";
import { Products } from "./Products";
import { Grid } from "./Grid";
import { WinterProducts } from "./WinterProducts";
import  Carousel  from "./Carousel";

export function Main({ handleSizeChange, selectedSize, products, addToCart, productsRef}){

  //const carouselIndexes = [5, 10, 15, 20, 25, 30, 35];
    return(
      <>
        <HeroSection/>
        <Products
          productsRef={productsRef}
          handleSizeChange={handleSizeChange} 
          selectedSize={selectedSize} 
          products={products} 
          addToCart={addToCart}
          /> 
         
        <Grid 
          products={products}/>

        <Carousel/>
        <WinterProducts/> 
      </>
    )
} 
 

