import React from "react";

 export default function Category({filterProducts,isfiltered,showAllProducts}){
  
  return(
    <div className="category">

      <button  onClick={()=>filterProducts("electronics")}>Electronics</button>
      <button onClick={()=>filterProducts("men's clothing")}> Men's</button>
      <button onClick={()=>filterProducts("women's clothing")}> Women's</button>
      <button onClick={()=>filterProducts("jewelery")}> Jewelery</button>
       {isfiltered && <button className="showAllProducts" onClick={showAllProducts} > show all products</button>}
    </div>
  )
}