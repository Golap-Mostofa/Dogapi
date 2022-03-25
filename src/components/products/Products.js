import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [Products,Setproducts]= useState([])
   
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>Setproducts(data))
    },[])

    const hendelAddToCart=()=>{
        console.log('clicked');
    }

    return (
        <div className='allCard-products'>
            <div className="card-products">
            {
                Products.map(product=><Product
                data={product}
                key={product.id}
                hendelAddToCart={hendelAddToCart}
                ></Product>)
            }
            </div>
            <div className="item-products">
            <h5>amar bangla</h5>
            </div>
        
        </div>
    );
};

export default Products;