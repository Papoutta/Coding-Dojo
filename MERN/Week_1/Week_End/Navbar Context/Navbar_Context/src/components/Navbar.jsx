import { useContext } from "react";
import { UserContext } from "../App";
import '../App.css'


const NavBar = ()=>{
    
    const { name } = useContext(UserContext)

    return (
        <div className="nav"> 
            Hi {name}!
        </div>
    )
}

export default NavBar;
