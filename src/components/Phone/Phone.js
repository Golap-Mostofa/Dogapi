import React, { useEffect, useState } from 'react';

const Phone = () => {
    const [phone,setphone] = useState('')

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/phones?search=')
        .then(res=>res.json())
        .then(data=>setphone(data))
    },[])
    return (
        <div>
            <img src="" alt="" />
            <button>Search</button>
            <input type="text" />
        </div>
    );
};

export default Phone;