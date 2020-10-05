import { useEffect, useState } from "react"
import React from 'react'

function Tr({product, handleTodal}) {
    
    const [updateAmount, setUpdateAmount] = useState(product.amount)

    useEffect(() => {
        product.amount = updateAmount
        handleTodal()
    },[updateAmount])

    function handleChange(e) {
        setUpdateAmount( e.target.value)
    }

    return(
        <tr>
            <td>{product.productName}</td>
            <td><input value={updateAmount} onChange={handleChange} type='number'></input></td>
            <td>${(updateAmount * product.productPrice).toFixed(2)}</td>
            <td>Trash</td>
        </tr>
    );
}
export default Tr