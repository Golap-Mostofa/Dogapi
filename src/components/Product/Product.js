import React from 'react';
import './Product.css'
const Product = ({data,hendelAddToCart}) => {
    // console.log(data,hendelAddToCart);
    const {Name, img,price,ratings} = data
    // console.log(hendelAddToCart);
    return (
        <div className='product-container'>
           <img src={img} alt="" />
           <div>
           <h4>name: {Name}</h4>
           <p>price: {price}</p>
           <p><small>rating: {ratings}</small></p>
           </div>
          <button className='btn-cart' onClick={hendelAddToCart}>
              <p>add To Cart</p></button>
        </div>
    );
};

export default Product