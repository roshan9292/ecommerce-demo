import React from "react";
import { Outlet,Link} from "react-router-dom";
import "./style.css"
 export default function Navbar({counter,cartItems}){
  return(
    <div className="navbar">
      <input className="searchBar" placeholder="Search for  products"></input>
       <div className="cartElement">
        <img className="cartImg" src="./images/cart.svg"/>
        <Link className="nav-link" to="cart">Checkout</Link>
       </div >
    </div>
  )
}
