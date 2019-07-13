import React from 'react';

export default function (props) {
   const { product } = props;

   return (
       <div>
           {product.name}
           <img src={product.imgUrl} />
           {product.price}


       </div>
   )





}
