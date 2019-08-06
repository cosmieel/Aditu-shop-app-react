import React, { Component} from 'react';
import { Menu, menuItems } from './menu'

export default class MenuButtonLogic extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      button:true
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }
    
  toggleMenu() {
    this.setState (
      prevState => ({
        menu: !prevState.menu,
        button: !prevState.button
      })
    )
  }
    
  render() {
    return (
      <div>
        
        <button onClick = {this.toggleMenu} className={`menuButton ${(this.state.menu) ? "buttonOpen" : ""}`}>
          {
            this.state.button  
            ? 'navigation' 
            : 'close'
          }
        </button>
        
        { this.state.menu ? <Menu menuItems={menuItems}/> : '' }

      </div>
    )
  }
}