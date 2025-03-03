import { useState } from "react"
import { category } from "../../category"
import "./Shop.css"
import { FaShopify } from "react-icons/fa6";
import { Product } from "../../components/cards/Product"
import { dummydata } from "../../dummydata"

export const Shop = () => {
    let [cate, setCate] = useState(dummydata)
    function filterProduct(category) {
        if (category === "All") {
            setCate(dummydata)
        }
        else {
            const updatedata = dummydata.filter((item) => (item.category === category))
            setCate(updatedata)
        }
    }
    return (
        <>

            <div className="shop">
                <div className="heading">
                    <span>Shop</span>
                    <FaShopify />
                </div>
                <div className="category-section">
                    {category.map((item) => (
                        // console.log(item)
                        <div className="category-card" onClick={() => {
                            filterProduct(item.name)
                        }}>
                            <img src={item.image} alt="" />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                <div className="product-section">
                    {cate.map((item) => (
                        <Product name={item.name} price={item.price} image={item.image} id={item.id} />
                    ))}
                </div>

            </div>
        </>
    )
}