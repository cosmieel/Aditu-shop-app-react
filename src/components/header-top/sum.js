import React from 'react';
import './style.css'
import { connect } from 'react-redux'

export const mapStateToProps = state => ({ 
  sum: state.sum
})

export const Sum = ({ sum }) => (  
  <span className="sum">${ sum }</span>         
)

export const NewSum = connect(mapStateToProps)(Sum)