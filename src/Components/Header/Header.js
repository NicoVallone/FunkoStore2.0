import React from "react";
import './Header.css'
import logo from '../../Assets/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
    return (
        <header>
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="">Categoría 1</a></li>
                    <li><a href="">Categoría 2</a></li>
                    <li><a href="">Categoría 3</a></li>
                    <li><a href="">Categoría 4</a></li>
                </ul>
                <ShoppingCartIcon />
            </nav>
        </header>
    )
}

export default Header
