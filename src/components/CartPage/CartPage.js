import React, { useEffect, useState } from 'react';
import CartTable from './Table'
import './cartPage.css';
import { Link } from 'react-router-dom';



function CartPage({cartsProduct}) {
  
function handleTodal() {
    return cartsProduct.reduce((total, product) => {return total + (product.productPrice * product.amount)}, 0)
  }  

const [total, setTotal] = useState(handleTodal())

  useEffect(() => {
    
    handleTodal()
  }, [cartsProduct])

  return (
    <div className="cartPage">
      <div className='cartPage-container'>

          <CartTable 
            handleTodal={() => setTotal(handleTodal())} 
            cartsProduct={cartsProduct}/>

          <div className='options'>

            <div className='div-back-shopping'>
              <Link to='/'><span>Continue Shopping</span></Link>
            </div>

            <div className='confirm-box'>

              <div className='total-box'>
                <span>Total:</span> 
                <h2>${total.toFixed(2)}</h2>
              </div>

              <div className='button'>
                <button>Confirm</button>
              </div>

            </div>

          </div>

      </div>
    </div>
  );
}

export default CartPage;
