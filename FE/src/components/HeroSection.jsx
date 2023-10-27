import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function HeroSection(){
   
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <div className="hero-section">
       
          <Slider {...settings}>
            <div className="hero-section">
            
             <img src="https://images.pexels.com/photos/461593/pexels-photo-461593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="hero-sec-offers">NEW MEMBERS 20% DISCOUNT</div>
            </div>

            <div className="hero-section">
              <img src="https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="hero-sec-offers">NEW IN WOMEN COLLECTION</div>
            </div>

            <div className="hero-section">
              <img src="https://images.pexels.com/photos/2270328/pexels-photo-2270328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="hero-sec-offers">SHOCK DEALS 30-60%</div>
            </div>

            <div className="hero-section">
              <img src="https://images.pexels.com/photos/1973293/pexels-photo-1973293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="hero-sec-offers">WINTER COLLECTION</div>
            </div>

            <div className="hero-section">
             <img src="https://images.pexels.com/photos/1469880/pexels-photo-1469880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
             <div className="hero-sec-offers">FANTASTIC PRICES ON OUTHDOR SHOES</div>
            </div>

            <div className="hero-section">
              <img src="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="hero-sec-offers">SHAR REWARD 5% extra discount on kids collection </div>
            </div>

            <div className="hero-section">
                <img src="https://images.pexels.com/photos/1883944/pexels-photo-1883944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="hero-sec-offers">NEW IN ACCESSORIES</div>
            </div>
          </Slider>
        </div>
      );
    }
  