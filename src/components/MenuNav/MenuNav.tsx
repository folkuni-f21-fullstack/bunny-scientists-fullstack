import {useState} from 'react';
import "./MenuNav.scss";

const MenuNav = () => {
    // const [isActive, setIsActive] = useState("")

    // function toggleActive() {
    //     if(isActive == "active"){
    //         setIsActive("")
    //     } else {
    //         setIsActive("active")
    //     }
    // }
    return (
        <nav className="menu-nav">
            <ul>
                <li><a href="#food">Mat</a></li>
                <span className="vertical-line"></span>
                <li><a href="#kids">Barn</a></li>
                <span className="vertical-line"></span>
                <li><a href="#beverages">Dryck</a></li>
                <span className="vertical-line"></span>
                <li><a href="#desserts">Efterrätt</a></li>
            </ul>
        </nav>
    )
}
export default MenuNav