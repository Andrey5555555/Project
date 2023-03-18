import css from "./categories.module.css"
import allimg from "../../icons/food7.png" 
import { useMemo } from "react"
const Categories_data = require("../../categories.json")



function Categories ({active,setActive}){
    console.log(active)
    const data = useMemo(() => [...Categories_data,{alias: "all", image: allimg ,title: "All"}], [])
    console.log(data);
    return (<div className={css.list}>{data.map(function(product){
        return (<div className={css.categories} onClick={function(){setActive(product.alias)}}>
        <img src={product.image}></img>
        <h2 style={active===product.alias? {color:"red"}:{}}> {product.title}</h2>
        </div>)})}</div>)
}

export default Categories; 