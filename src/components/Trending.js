import Products from "./Products/Products"
const Products_data = require("../products.json")

function Trending (){
    const data = Products_data.filter(function(product){return product.trend})
    return (<div><h1>Trending</h1><Products data = {data}></Products></div>)
}

export default Trending; 