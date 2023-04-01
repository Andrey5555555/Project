import css from "./categories.module.css"
import allimg from "../../icons/food7.png" 
import { useMemo } from "react"
import classNames from "classnames"
const Categories_data = require("../../categories.json")



function Categories ({active,setActive}){
    console.log(active)
    const data = useMemo(() => {
        const Categoriesdata = [...Categories_data]
        Categoriesdata.unshift({alias: "all",image: allimg ,title: "All"})
        return Categoriesdata
    }, [])
    console.log(data);
    return (<div className={css.list}>{data.map(function(product){
        return (<div className={classNames(css.categories, active===product.alias? css.active:null)} onClick={function(){setActive(product.alias)}}>
        <img src={product.image}></img>
        <h2> {product.title}</h2>
        </div>)})}</div>)
}

export default Categories; 