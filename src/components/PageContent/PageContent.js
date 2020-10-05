import React from 'react';
import './pageContent.css'
import ProductCart from '../ProductsCard/ProductCard'
import ProductCard from '../ProductsCard/ProductCard';

let anyName = [
  {
    id: 1,
    productImage: 'https://cdn.awsli.com.br/600x450/321/321396/produto/29324840/395c5812ad.jpg',
    productName: 'Item-1',
    productPrice: 28.96,
    amount: 1
  },
  {
    id: 2,
    productImage: 'https://cdn.awsli.com.br/600x450/321/321396/produto/29324840/395c5812ad.jpg',
    productName: 'Item-2',
    productPrice: 81.96,
    amount: 1
  },
  {
    id: 3,
    productImage: 'https://cdn.awsli.com.br/600x450/321/321396/produto/29324840/395c5812ad.jpg',
    productName: 'Item-3',
    productPrice: 2.10,
    amount: 1
  },
  {
    id: 4,
    productImage: 'https://cdn.awsli.com.br/600x450/321/321396/produto/29324840/395c5812ad.jpg',
    productName: 'Item-4',
    productPrice: 39.5,
    amount: 1
  },
  {
    id: 5,
    productImage: 'https://cdn.awsli.com.br/600x450/321/321396/produto/29324840/395c5812ad.jpg',
    productName: 'Item-5',
    productPrice: 2.00,
    amount: 1
  },
]

function PageContent({cartsProduct, setCartsProducts}) {


  return (
    <div className="pageContent">
      <div className='pageContent-container'>
        {anyName.map(product => <ProductCard cartsProduct={cartsProduct} setCartsProducts={setCartsProducts} key={product.id} product={product}/>)}
      </div>
    </div>
  );
}

export default PageContent;
