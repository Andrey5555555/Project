import './App.css';
import Home from "./components/Home"
import Menu from "./components/Menu"
import Trending from "./components/Trending"
import Setings from "./components/Setings"
import {Link,Routes,Route} from "react-router-dom"
import Aside from "./components/aside/Aside"
import homeicon from "./icons/home.svg"
import menuicon from "./icons/menu.svg"
import setingsicon from "./icons/setings.svg"
import fireicon from "./icons/fire.svg"

const Route_data =
[
{icon:homeicon, url:"/",title:"Home", Component:Home},
{icon:menuicon, url:"/menu",title:"Menu", Component:Menu},
{icon:setingsicon, url:"/setings",title:"Setings", Component:Setings},
{icon:fireicon, url:"/trending",title:"Trending", Component:Trending}]

function App() {
  return (
   <div className='page-wrapper'>
   <Aside data={Route_data}></Aside>
   <main>
   <Routes>
    {Route_data.map(function(item){
     return <Route key={`route.item${item.url}`} path={item.url} element={<item.Component/>} />    
     })}
      </Routes>
    </main>
   </div>
  );
}

export default App;
