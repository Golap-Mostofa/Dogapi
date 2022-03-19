import React, { useEffect, useState } from 'react';
import './Img.css'
const Img = () => {
    const [Img,setImg] = useState([])
  

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setImg(data))
    },[])

    return (
        <div className='row '>
       {
        Img.map(pd=>Prodact(pd))
       }
        </div>
    );
};
const Prodact =(props)=>{
    console.log(props);
    return(
            <div className="col-lg-3 text-center p-2 m-5 color">
                <img className='w3' src={props.image} alt="" />
                <h4>{props.category}</h4>
                <p><sub>{props.description.slice(0,100)}</sub></p>
                <div className="d-flex justify-content-around calu">
                <a href="">price</a>
                <a href="">add </a>
                </div>
            </div>
    )
}




export default Img;