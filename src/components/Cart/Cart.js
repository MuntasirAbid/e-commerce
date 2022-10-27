import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4><b>Order summery</b></h4>

            <h5>Srlected item: {cart.length} </h5>
            <p>Total price: ${total}</p>
            <p>Total shipping: ${shipping}</p>
            <p>Tax:${tax}</p>
            <p><b>Grand total: ${grandTotal.toFixed(2)} </b></p>


        </div>
    );
};

export default Cart;