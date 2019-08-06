import React from 'react'
import './style.css'

export const footerItems = [
  'Alexis Hudson', 
  'American Apparel', 
  'Ben Sherman',
  'Big Buddha',
  'Chanel',
  'Christian Audigier',
  'Coach',
  'Cole Haan'
];

const FooterNavItem = ({ item }) => (
  <li className="footer-nav--item" >
    <a href="https://aditu-shop-app-react.firebaseapp.com/" className="footer-nav--item__link">
      {item}
    </a>
  </li>
)

export const FooterItems = ( props ) => {

  const footerItems = props.footerItems 

  const itemsList = footerItems.map((item, index) =>
    <FooterNavItem key={index} item={item} />
  )
  
  return(
    <ul className="footer-nav--list">
      { itemsList }
    </ul>
  )
}