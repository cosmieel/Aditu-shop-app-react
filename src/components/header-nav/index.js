import React from 'react';
import './style.css'
import MediaQuery from 'react-responsive'
import { Menu, menuItems } from './menu'
import MenuButtonLogic from './menuButtonLogic'
import { Wrap } from '../../components'


export const HeaderNav = () => {

  return(
    <>
      <MediaQuery minWidth={1125}>
        <nav className="header-nav">
          <Wrap>
            <Menu menuItems={menuItems}/>
          </Wrap>
        </nav>
      </MediaQuery>

        
      <MediaQuery  maxWidth={1124}>
        <nav className="header-nav">
          <Wrap>
            <MenuButtonLogic/>  
          </Wrap>
        </nav>
      </MediaQuery>
      
    </>   
  )
}

