import React, { Fragment, lazy, Suspense } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from '../../reducers/reducer'
import './style.css'

const Header = lazy(() => import('../header'))
const Content = lazy(() => import('../content'))
const Footer = lazy(() => import('../footer'))

const store = createStore(reducer)

const App = () => {
    
  const renderLoader = () => 
    <div className="load-wrapper">
      <div className="loader" />
      <div className="loader" />
      <div className="loader" />
    </div>

  return(

    <Fragment>
      <Suspense fallback={renderLoader()}>
        <Provider store={store}>
          <Header/>
          <Content/>
        </Provider>
        <Footer/>
      </Suspense>
    </Fragment>
  )
}

export default App 