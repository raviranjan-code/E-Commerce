import { useDispatch } from "react-redux"
import image1 from "../../assets/images/image1.jpg"
import "./Product.css"
import { AddItem } from "../../redux/cartSlice"

export const Product=({name,image,price,id})=>{
let dispatch=useDispatch()
    return(
        <>
        <div className="product">
            <img src={image} alt="" />
            <div className="product-details">
                <span className="name">{name}</span>
                <span className="price">Rs {price}/-</span>
                <button onClick={()=>{
                    dispatch(AddItem({name:name,image:image,price:price,id:id}))
                    alert("product added successfully...")
                }}>Add+</button>
            </div>
        </div>
        </>
    )
}