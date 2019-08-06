import React, { Fragment } from 'react';
import './style.css'
import { NewHeaderTop, HeaderNav, HeaderMain } from '../../components'

const Header = () => (
  <Fragment>
    <NewHeaderTop/>
    <HeaderNav/>
    <HeaderMain/>
  </Fragment>
)

export default Header