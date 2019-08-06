import React from 'react';
import './style.css';
import { Wrap } from '../../components';
import { incShoesPrice, 
  incTshirtPrice1, 
  incTshirtPrice2, 
  incWalletPrice, 
  incBagPrice, 
  incCargoPrice } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ContentProductsItems = ({ photo, header, price, onClick }) => (
  <div className="product-card">
    <div className="img-section">
      <img src={ photo } alt={ header }/>
      <h5>{ header }</h5>
    </div>
    <div className="price-section">
      <div></div>
      <span>${ price }</span>
      <button className="inc-btn" onClick={onClick}>Buy Now</button>
    </div>
  </div> 
)

export const priceList = {
  shoesPrice: 300,
  tshirtPrice1: 400,
  tshirtPrice2: 600,
  walletPrice: 500,
  bagPrice: 1000,
  cargoPrice: 300
}

export const ContentProducts = ({
  incShoesPrice,
  incTshirtPrice1,
  incTshirtPrice2,
  incWalletPrice,
  incBagPrice,
  incCargoPrice }) => (

  <section className="products">
    <Wrap>
      <h4 className="content-products__title">FEATURED PRODUCTS</h4>
    </Wrap>
    <section className="content-products">
      <Wrap>
        <div className="content-products-cards">
          <div className="content-products-cards__item">
            <ContentProductsItems
            photo="/img/shoes2.png"
            header="Branded Shoe"
            price={priceList.shoesPrice}
            onClick={incShoesPrice}
            />
          </div>
          <div className="content-products-cards__item">
            <ContentProductsItems
            photo="/img/tshirt3.png"
            header="Branded Tees"
            price={priceList.tshirtPrice1}
            onClick={incTshirtPrice1}
            />
          </div>
          <div className="content-products-cards__item">
            <ContentProductsItems
            photo="/img/tshirt4.png"
            header="Branded Tees"
            price={priceList.tshirtPrice2}
            onClick={incTshirtPrice2}
            />
          </div>
          <div className="content-products-cards__item">
            <ContentProductsItems
            photo="/img/wallet.png"
            header="Branded Wallets"
            price={priceList.walletPrice} 
            onClick={incWalletPrice}
            />  
          </div>
          <div className="content-products-cards__item">
            <ContentProductsItems
            photo="/img/bag.png"
            header="EMS Women Bags"
            price={priceList.bagPrice}
            onClick={incBagPrice}
            />
          </div>
          <div className="content-products-cards__item">
            <ContentProductsItems
            photo="/img/cargo2.png"
            header="Branded Cargos"
            price={priceList.cargoPrice}
            onClick={incCargoPrice}
            />
          </div>
        </div>
      </Wrap>
    </section>
  </section>  
)  

export const mapStateToProps = state => ({ 
  sum: state.sum
})

export const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators({ 
      incShoesPrice, 
      incTshirtPrice1, 
      incTshirtPrice2, 
      incWalletPrice, 
      incBagPrice, 
      incCargoPrice 
    }, dispatch)
  )
}

export const NewContentProducts = connect(mapStateToProps, mapDispatchToProps)(ContentProducts)