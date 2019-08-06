import React from 'react';
import Slider from "react-slick"
import { Wrap } from '../../components';
import { ChevronLeft, ChevronRight } from 'react-bytesize-icons';
import MediaQuery from 'react-responsive'
import './style.css';

const ContentSlideItems = ({ photo, header }) => (
  <div className="slide-card">
    <div className="slide-car__img-section">
      <img src={ photo } alt={ header }/>
    </div>
    <div className="slide-car__action-section">
      <h5>{ header }</h5>
      <button className="shop-btn">Shop</button>
    </div>
  </div> 
)

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="сhevronRight"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight width={80} height={80} strokeWidth='2%' color='#e2e2e2'/>
    </div>
  );
}

const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="сhevronLeft"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft width={80} height={80} strokeWidth='2%' color='#e2e2e2'/>
    </div>
  );
}

const ContentSlide = () => {

  const settings = {
    dots: false,
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    className: "center-mode",
    centerMode: true,
    centerPadding: '0px',
    initialSlide: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 1070,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 750,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  }

  return(

    <MediaQuery minWidth={500}>

    <section className="content-slide">
          
      <Wrap>
        <div className="slide-products-cards">
          <Slider {...settings}>
            <div className="slide-products-cards__item">
              <ContentSlideItems
                photo="/img/shoes1.png"
                header="Branded Shoes"
              />
            </div>
            <div className="slide-products-cards__item">
              <ContentSlideItems
                photo="/img/tshirt2.png"
                header="Branded Tshirts"
              />
            </div>
            <div className="slide-products-cards__item">
              <ContentSlideItems
                photo="/img/cargo.png"
                header="Branded Cargos"
              />
            </div>
            <div className="slide-products-cards__item">
              <ContentSlideItems
                photo="/img/shoes1.png"
                header="Branded Shoes"
              />
            </div>
            <div className="slide-products-cards__item">
              <ContentSlideItems
                photo="/img/tshirt2.png"
                header="Branded Tshirts"
              />
            </div>
            <div className="slide-products-cards__item">
              <ContentSlideItems
                photo="/img/cargo.png"
                header="Branded Cargos"
              />
            </div>
          </Slider>
        </div>
      </Wrap>

    </section>

    </MediaQuery>
  )
    
}

export { ContentSlide }