import { useState } from "react"
import Categories from "./Categories/Categories"
import Products from "./Products/Products"
const Categories_data = require("../categories.json")
const Menu_data = require("../products.json")



function Menu (){
    console.log(Categories_data)
    const[active, setActive] = useState("burger")
    const data = Menu_data.filter(function(menu){return menu.category===active|| active==="all"})
    return (<div>
        <h1>Menu</h1>
        
        <Categories active={active} 
        setActive={setActive}>
        </Categories>
        <h2>All Items</h2>
        <Products data = {data}></Products>
        </div>)
    
}

export default Menu; 