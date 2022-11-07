import React from "react"
import "./Sidebar.css"
import Logo from "../img/logo.png"
import {Link} from 'react-router-dom'
import { SidebarData } from "../data/Data"
import {useState} from "react"


const Sidebar = () =>{
  const[selected,setSelected] = useState(0)

  return(
    <div className="Sidebar">
      {/*Logo*/}
        <div className="logo">
          <img src={Logo} alt=""/>
          <br />
            <span className="title-sidebar">Pasteleria Picolo</span>
        </div>

        <div className="menu">
          {SidebarData.map((item,index)=>{
            return (
              <Link to={item.path} onClick={()=>setSelected(index)} key={index} className={selected===index ? "menuItem active":"menuItem"}>
                <item.icon></item.icon>
                <span>
                  {item.heading}
                </span>
              </Link>
            )
          })}
        </div>
    </div>
  )
}

export default Sidebar;