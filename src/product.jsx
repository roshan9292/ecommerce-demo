import React from "react";

export default function Product({product,addToCart}){

  return(
   <div className="product">
    <img src={product.image}/>
    <p>{product.title}</p>
    <div className="productDetail">
     <p>{product.price}$</p>
     <button className="addButton"onClick={addToCart}>Add to cart</button>
    </div>
   </div>
  )
}