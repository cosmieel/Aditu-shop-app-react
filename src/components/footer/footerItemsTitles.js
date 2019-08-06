import React from 'react'
import { FooterItems, footerItems } from './footerItems'
import './style.css'

export const footerItemsTitles = [
  'Featured Sale',
  'Mens Store',
  'Women Store',
  'Quick Links',
]

const FooterCell = ( {title} ) => (
  <section className="footer-cell">
    <h4 className="footer-nav--title" >{title}</h4>
    <FooterItems footerItems={footerItems}/>
  </section>
)

export const FooterItemsTitles = ( props ) => {

  const footerItemsTitles = props.footerItemsTitles 

  const titlesList = footerItemsTitles.map((title, index) =>
    <FooterCell key={index} title={title} />
  )
  
  return(
    <ul className="footer-nav">
      { titlesList }  
    </ul>
  )
}