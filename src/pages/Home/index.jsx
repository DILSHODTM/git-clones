import React from 'react';
import "./style.scss";
import Swiper from '../../UI/Swiper';
import Contents from '../../UI/Categories';

import Products from '../../UI/Products';

const index = () => {
   return (
      <>
      <div className="container">
      <Swiper/>
      <Contents/>
      <Products/>
 

      </div>
      </>
   );
};

export default index;<h1>Home</h1>