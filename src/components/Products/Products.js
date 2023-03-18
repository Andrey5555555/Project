import css from "./products.module.css"


function Products(props){
return(<div className={css.hellwrap}>
    {props.data.map(function(product){
    return (<div className={css.hell}>
    <img src={"./imgfood/" + product.image}></img>
    <div className={css.description}>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <h3>${product.price}</h3>
    </div>
    </div>)})}

    </div>)
}

export default Products;