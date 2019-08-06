import React from 'react'
import { Wrap } from '../../components'
import { FooterItemsTitles, footerItemsTitles } from './footerItemsTitles'
import './style.css'

const Footer = () => (
  <div className="footer">
    <Wrap>
      <FooterItemsTitles footerItemsTitles={footerItemsTitles}/>
    </Wrap>
    <div className="footer-bottom"></div>
  </div>
)

export default Footer