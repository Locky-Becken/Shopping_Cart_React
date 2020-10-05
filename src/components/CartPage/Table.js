import React from 'react'
import Tr from './TR'
/* IoIosArrowBack */


function CartTable({cartsProduct, handleTodal}) {

    return(
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
            
            {cartsProduct.map((product, index) => <Tr handleTodal={handleTodal} key={index} product={product}/>)}

            </tbody>
        </table>
    );
}

export default CartTable