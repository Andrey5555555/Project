import {Link,Routes,Route} from "react-router-dom"
import css from "./aside.module.css"
import { ReactSVG } from 'react-svg';
import { useLocation } from "react-router-dom";


const Aside =({data}) => {
const {pathname}=useLocation();
console.log(pathname);
return(  
    <aside>
    <ul className={css.menulist}>
        {data.map(function(item){
            return <li  key={`menu.item${item.url}`} className={`${css.menuLink} ${pathname===item.url?css.active:""}`}>
            <Link to={item.url}>
            <ReactSVG src={item.icon}/>
        <span>{item.title}</span>
        </Link></li>})}
   </ul>
   </aside>)
}
    
export default Aside;