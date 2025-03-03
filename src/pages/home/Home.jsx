import '../home/Home.css'
import bg from '../../assets/images/bg0.gif'
import { category } from '../../category'
import { Product } from '../../components/cards/Product'
import { dummydata } from '../../dummydata'
import { useState } from 'react'



export const Home = () => {
    let [cate, setCate] = useState(dummydata)
    function filterProduct(category) {
        const updatedata = dummydata.filter((item) => (item.category === category))
        setCate(updatedata)
    }
    return (
        <>
            <div className="home">

                <div className="hero-bg">
                    <img src={bg} alt="" />
                </div>
                <div className="category-section">
                    {category.slice(0, 5).map((item) => (
                        // console.log(item)
                        <div className="category-card" onClick={()=>{
                            filterProduct(item.name)
                        }}>
                            <img src={item.image} alt="" />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <h1>Trending Products</h1>
                <div className="product-section">
                    {cate.slice(0, 7).map((item) => (
                        <Product name={item.name} price={item.price} image={item.image} id={item.id}/>
                    ))}
                </div>
            </div>

        </>
    )
}