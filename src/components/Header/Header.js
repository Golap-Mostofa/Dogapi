import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div>
           <nav >
               <div className='header'>
                   <h2>My bicke ecomarch webpage</h2>
                   <div>
                   <a href="/shop">shop</a>
                   <a href="/orders">orders</a>
                   <a href="/inventory">inventory</a>
                   <a href="/about">about</a>
                   </div>
               </div>
           </nav>
        </div>
    );
};

export default Header;