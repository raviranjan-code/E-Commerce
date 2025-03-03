import { useState } from "react"
import { CartCard } from "../../components/cartcard/CartCard"
import "./Cart.css"
import ec from "../../assets/images/emptycart.png"
import { useSelector } from "react-redux"
export const Cart=()=>{
    let items=useSelector(state=>state)
    let total=items.cart.reduce((a,b)=>a+b.price,0)
    return(
        <>
        <div className="cart">
            {items.cart.length<=0?
            <div className="empty-cart">
                <img src={ec} alt="" />
                <h1>Empty Cart</h1>
            </div>:
            <div className="cartcard-section">
{items.cart.map((item)=>(
    <CartCard name={item.name} price={item.price} image={item.image} id={item.id}/>
))}
 <div className="price-section">
           <span>Total Products:{items.cart.length}</span> 
           <span>Total Price:{total}</span>    
                </div>
            </div>
           
            }
            
        </div>
        </>
    )
}