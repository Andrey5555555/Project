import emoji from "../../icons/emoji.png"
import Categories from "../Categories/Categories"
import Products from "../Products/Products"
import { useState } from "react"
import css from "./home.module.css"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import apple from "../../previer/apple.png"
import burger2 from "../../previer/burger2.png"
import flame1 from "../../previer/flame1.png"
import orange1 from "../../previer/orange1.png"
import chicken from "../../articals/chicken.png"
import cockie from "../../articals/cockie.png"
import virus from "../../articals/virus.png"
import pizza from "../../articals/pizza.png"
import coment from "../../articals/coment.png" 

const Menu_data = require("../../products.json")



function Home (){
    const[active, setActive] = useState("all")
    const data = Menu_data.filter(function(menu){return menu.category===active|| active==="all"}).slice(0,8)
    console.log(css);
    return (<div>
        <h1>Welcome <br></br>Lucknow <img src={emoji}></img> </h1>
        <div className={css.flex_container}>
            <div className={css.left}>
          
            <Categories active={active} 
            setActive={setActive}>
            </Categories>
            <h2>All Items</h2>
            <Products data = {data}></Products>
            </div>
            <div className={css.right}>
                <div className={css.sale}>
                    <h2>-50% Off</h2>
                    <h3>the full price of burgers</h3>
            <MouseParallaxContainer className={css.sale_images} useWindowMouseEvents = {true} globalFactorX={0.1} globalFactorY={0.1}>
            <MouseParallaxChild className={css.apple} factorX={0.2} factorY={0.4}>
            <img src={apple} alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild className={css.burger2} factorX={0.3} factorY={0.5}>
            <img src={burger2} alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild className={css.flame1} factorX={0.5} factorY={0.8}>
            <img src={flame1} alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild className={css.orange1} factorX={0.6} factorY={0.9}>
            <img src={orange1}alt="" />
            </MouseParallaxChild>
            </MouseParallaxContainer>
                </div>
                <div className={css.articles}><h2>Articles</h2>
                <ul>
                    <li><img src={chicken}></img><h6>How to cook turkey on Natural Gas <img src={coment}></img></h6></li>
                    <li><img src={virus}></img><h6>Corona virus update:343287+ cases<img src={coment}></img></h6></li>
                    <li><img src={cockie}></img><h6>Tasty chunk donutes with chocolate<img src={coment}></img></h6></li>
                    <li><img src={pizza}></img><h6>Home made double cheez with popcorn respies<img src={coment}></img></h6></li>
                </ul>
                
                </div>
             </div>
        </div>
    </div>)
    

}

export default Home; 