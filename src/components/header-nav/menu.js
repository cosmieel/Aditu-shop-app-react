import React from 'react';
import MediaQuery from 'react-responsive'

export const menuItems = [
  'Home', 
  'Sale', 
  'Handbags', 
  'Wallets', 
  'Accessories', 
  'Mens store', 
  'Shoes', 
  'Vintage', 
  'Services', 
  'Contact us'
];

const HeaderItem = ( {item}) => (
  <>
    <MediaQuery minWidth={1125}>
        
      <li className="header-nav-item" >
      
        <a href="https://aditu-shop-app-react.firebaseapp.com/" className="header-nav-item__link">

          {item}

        </a>
      </li>
    </MediaQuery>

    <MediaQuery  maxWidth={1124}>
      <li className="mobile--header-nav-item" >
        <a href="https://aditu-shop-app-react.firebaseapp.com/" className="mobile--header-nav-item__link">

          {item}

        </a>
      </li>
    </MediaQuery>
    </>
)

export const Menu = ( props ) => {

  const menuItems = props.menuItems 

  const menu = menuItems.map((item, index) =>
    <HeaderItem key={index} item={item} />
  )
    
  return(
    <>
      <MediaQuery minWidth={1125}>
        <ul className="header-nav-list">

          { menu }

        </ul>
      </MediaQuery>

      <MediaQuery  maxWidth={1124}>
        <div className="header-top-search">
          <form action="">
            <input type="search" name="search-field" id="search"/>
            <button type="submit">
                <img src="/img/search.svg" alt="search"/>
            </button>
          </form>
        </div>
        <ul className="mobile--header-nav-list">
          
          { menu }
          
        </ul>
      </MediaQuery>
    </>
  )
}   