import React from "react";
import './Navbar.style.js'
import { styles } from "./Navbar.style";
import logo from '../../Assets/logo.svg'
import line from '../../Assets/Line.png'
import CartWidget from "./CartWidget.js";



const Navbar = () => {
    const categorias = [
        {nombre:"Películas", id:0, ruta:"#"},
        {nombre:"Series", id:1, ruta:"#"},
        {nombre:"Deportes", id:2, ruta:"#"},
        {nombre:"Música", id:3, ruta:"#"},
    ];


    return (
        <header>
            <div style={styles.container}>
                <img style={styles.logo} src={logo} alt="logo" />
                <nav style={styles.nav}>
                    {
                        categorias.map((categoria) => {
                            return <a key={categoria.id} style={styles.navItem} href={categoria.ruta}>{categoria.nombre}</a>
                        })
                    }
                    <CartWidget />
                </nav>
            </div>
            <img style={styles.line} src={line} alt="line" />
        </header>
    )
}

export default Navbar
