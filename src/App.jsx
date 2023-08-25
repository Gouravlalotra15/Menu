import React,{useState} from "react";
import menu from "./data.js"
import Menu from "./assets/Menu.jsx";
import Title from "./assets/Title";
import Catagories from "./assets/Catagories.jsx";
import './index.css'
const allCategories=['all',...new Set(menu.map((item)=>item.category))]

const App = () => {

  const [category,setCategory]=useState(allCategories);
  const[menuItems,setMenuItems]=useState(menu);

  const filterItems=(category)=>{
      if(category==='all')
      {
        setMenuItems(menu);
        return;
      }

     setMenuItems(menu.filter((data)=>data.category==category))
  }

  return <main>
    <section className="menu">
      <Title text='our menu'/>
      <Catagories category={category} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
};
export default App;
