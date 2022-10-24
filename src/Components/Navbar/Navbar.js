import React from "react";
import './Navbar.style.js'
import { styles } from "./Navbar.style";
import logo from '../../Assets/logo.svg'
import line from '../../Assets/Line.png'
import CartWidget from "./CartWidget.js";
import {Link, NavLink} from "react-router-dom"



const Navbar = () => {
    const categorias = [
        {nombre:"Películas", id:0, ruta:"/categoria/peliculas"},
        {nombre:"Series", id:1, ruta:"/categoria/series"},
        {nombre:"Deportes", id:2, ruta:"/categoria/deportes"},
        {nombre:"Música", id:3, ruta:"/categoria/musica"},
    ];


    return (
        <header>
            <div style={styles.container}>
                <Link to="/">
                    <img style={styles.logo} src={logo} alt="logo" />
                </Link>
                <nav style={styles.nav}>
                    {
                        categorias.map((categoria) => {
                            return <NavLink key={categoria.id} style={styles.navItem} to={categoria.ruta}>{categoria.nombre}</NavLink>
                        })
                    }
                    <Link to="/cart" >
                        <CartWidget />
                    </Link>
                </nav>
            </div>
            <img style={styles.line} src={line} alt="line" />
        </header>
    )
}

export default Navbar
