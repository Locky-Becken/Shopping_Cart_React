import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header'
import CartPage from './components/CartPage/CartPage'
import PageContent from './components/PageContent/PageContent'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const [cartsProduct, setCartsProducts] = useState([])
  
  function handleCart() {
    return cartsProduct.length
  }

  useEffect(() => {
    handleCart()
  }, [cartsProduct])

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartLength={handleCart} />
        <Switch>
          <Route exact path='/'>
            <PageContent cartsProduct={cartsProduct} setCartsProducts={setCartsProducts}/>
          </Route>
          <Route exact path='/cart'>
            <CartPage cartsProduct={cartsProduct} />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
