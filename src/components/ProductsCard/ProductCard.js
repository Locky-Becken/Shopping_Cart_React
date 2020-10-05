import React from 'react';
import './productCard.css';

function ProductCard({cartsProduct, product, setCartsProducts}) {

  const {productImage ,productName, productPrice} = product
  const sendToCart = () => {
    if(cartsProduct.indexOf(product) == (-1)) {
      setCartsProducts(prevCartsProducts => [...prevCartsProducts, product])
    }
    else{
      cartsProduct[cartsProduct.indexOf(product)].amount = cartsProduct[cartsProduct.indexOf(product)].amount + 1;
    }
  }
  
  return (
    <div className="product-card">
      <div className='product-img'>
          <img src={productImage} alt='relogios' />
      </div>
      <div className='product-name'>
          <span>{productName}</span>
      </div>
      <div className='product-price'><span>${productPrice.toFixed(2)}</span></div>
      <div className='product-add-to-cart'>
          <button onClick={sendToCart}>Add to cart</button>
      </div>
    </div>
  );


}

export default ProductCard;
