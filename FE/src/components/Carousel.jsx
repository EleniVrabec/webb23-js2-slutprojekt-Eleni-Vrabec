import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <div  className="men-slider">
        <h2> Comming soon... </h2>
        <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-item">
            <img src="https://lp2.hm.com/hmgoepprod?set=source[/66/b3/66b3526c95785ea41748e63c007b3caee1627068.jpg],origin[dam],category[sportswear_men_activity_hiking],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="" />
          </div>
          <div className="slider-item">
           <img src="https://i8.amplience.net//s/Lindex/8678356_80_ModelVariant?fmt=auto&$qltDefault$&$cache$&$productGridNoMenuBig$&$crop$&vw=1650&$crop2x$&$fmtQlt2x$" alt="" />
          </div>
          <div className="slider-item">
           <img src="https://i8.amplience.net//s/Lindex/8702672_9614_ModelVariant?fmt=auto&$qltDefault$&$cache$&$productGridNoMenuBig$&$crop$&vw=1650&$crop2x$&$fmtQlt2x$" alt="" />
          </div>
          <div className="slider-item">
            <img src="https://i8.amplience.net/i/Lindex/8694667_4055_PS_B?fmt=auto&$qltDefault$&$cache$&$productGridNoMenuBig$&$crop$&vw=1650&$crop2x$&$fmtQlt2x$" alt="" />
          </div>
          <div className="slider-item">
            <img src="https://i8.amplience.net/i/Lindex/8597416_8611_PS_MP?fmt=auto&$qltDefault$&$cache$&$productGridNoMenuBig$&$crop$&vw=1650&$crop2x$&$fmtQlt2x$" alt="" />
          </div>
          <div className="slider-item">
            <img src="https://i8.amplience.net/i/Lindex/8628557_7862_PS_MB?fmt=auto&$qltDefault$&$cache$&$productGridHighlighted$&$crop$&vw=1650&$crop2x$&$fmtQlt2x$" alt="" />
          </div>
          <div className="slider-item">
            <img src="https://i8.amplience.net/i/Lindex/8659843_80_PS_MT?fmt=auto&$qltDefault$&$cache$&$productGridHighlighted$&$crop$&vw=1650&$crop2x$&$fmtQlt2x$" alt="" />
          </div>
          <div className="slider-item">
            <img src="https://lp.arket.com/app006prod?set=source[/f7/e5/f7e5c7b9f46174d3c3437439b65ecdae011e0d1b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2],target[hm.com]&call=url[file:/product/main]" alt="" />
          </div>
          <div className="slider-item">
            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faa%2F3b%2Faa3b15ed12fa5c9a1bc383c5addd76128651cc74.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]" alt="" />
          </div>
        </Slider>
        </div>
      </div>
    );
  }

