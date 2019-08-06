import React, { Fragment } from 'react';
import './style.css'
import { Wrap } from '../wrap'
import { NewSum } from './sum'
import { clear } from '../../actions'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'

const HeaderTop = ( {clear} ) => (

  <Fragment>

    <section className="header-top-box">
      <Wrap>
        <section className="header-top">
          <div className="header-top-logo">Aditii</div>

          <MediaQuery minWidth={1125}>

            <div className="header-top-search">
              <form action="">
                <input type="search" name="search-field" id="search"/>
                <button type="submit">
                  <img src="/img/search.svg" alt="search"/>
                </button>
              </form>
            </div>

            <MediaQuery  maxWidth={1124}>
              <div className="header-top-search" />
            </MediaQuery>

          </MediaQuery>

          <div className="header-top-cart" onClick={clear}>
            <img src="/img/cart.svg" alt="cart"  />
            <NewSum/> 
          </div>
          
        </section>
      </Wrap>
    </section>

  </Fragment>
)

const mapStateToProps = state => ({ 
  sum: state.sum
})

const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clear())
})

export const NewHeaderTop = connect(mapStateToProps, mapDispatchToProps)(HeaderTop)
