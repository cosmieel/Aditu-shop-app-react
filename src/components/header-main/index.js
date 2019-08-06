import React from 'react';
import Slider from "react-slick"
import './style.css';
import { Wrap } from '../../components'

const HeaderMain = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    cssEase: "ease-in-out",
  }

  return(

    <section className="header-main">
      <Wrap>
        <Slider {...settings}>

          <section className="slider-cell">
            <section className="header-main__slider">
              <div className="header-main__slider_pic">
                <img src="img/tshirt1.png" alt="t-shirt"/>
              </div>
              <div className="header-main__slider_text">
                <h3>Cowhide Standard Crew</h3>
                <p>
                  White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made 
                  of organic cotton and comes in a regular fit.
                </p>
                <button>Shop Now</button>
              </div>
            </section>
          </section>

          <section className="slider-cell">
            <section className="header-main__slider">
              <div className="header-main__slider_pic">
                <img src="img/tshirt1.png" alt="t-shirt"/>
              </div>
              <div className="header-main__slider_text">
                <h3>Cowhide Standard Crew 2</h3>
                <p>
                  White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made 
                  of organic cotton and comes in a regular fit.
                </p>
                <button>Shop Now</button>
              </div>
            </section>
          </section>

          <section className="slider-cell">
            <section className="header-main__slider">
              <div className="header-main__slider_pic">
                <img src="img/tshirt1.png" alt="t-shirt"/>
              </div>
              <div className="header-main__slider_text">
                <h3>Cowhide Standard Crew 3</h3>
                <p>
                  White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made 
                  of organic cotton and comes in a regular fit.
                </p>
                <button>Shop Now</button>
              </div>
            </section>
          </section>

          <section className="slider-cell">
            <section className="header-main__slider">
              <div className="header-main__slider_pic">
                <img src="img/tshirt1.png" alt="t-shirt"/>
              </div>
              <div className="header-main__slider_text">
                <h3>Cowhide Standard Crew 4</h3>
                <p>
                  White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made 
                  of organic cotton and comes in a regular fit.
                </p>
                <button>Shop Now</button>
              </div>
            </section>
          </section>

          <section className="slider-cell">
            <section className="header-main__slider">
              <div className="header-main__slider_pic">
                <img src="img/tshirt1.png" alt="t-shirt"/>
              </div>
              <div className="header-main__slider_text">
                <h3>Cowhide Standard Crew 5</h3>
                <p>
                  White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made 
                  of organic cotton and comes in a regular fit.
                </p>
                <button>Shop Now</button>
              </div>
            </section>
          </section>

        </Slider>
      </Wrap>
    </section>
  )
}

export { HeaderMain }