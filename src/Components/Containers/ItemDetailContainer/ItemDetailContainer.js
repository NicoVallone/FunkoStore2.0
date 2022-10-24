import React, {useEffect, useState} from "react";
// import '../ItemListContainer.style.js'
// import { styles } from "../ItemListContainer.style";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

const funkos = [
    {nombre: "Jon Snow", version: "versión Lord Comander", categoria: "Series", subcategoria: "Game of Thrones", tamanio: "mediano", precio: 3000, stock: 5, id: 0},
    {nombre: "Michael Jordan", version: "única versión", categoria: "Deportes", subcategoria: "Chicago Bulls", tamanio: "mediano", precio: 3000, stock: 6, id: 1},
    {nombre: "Freddy Mercury", version: "versión Live Aid ", categoria: "Musica", subcategoria: "Queen ", tamanio: "mediano", precio: 2500, stock: 1, id: 2},
    {nombre: "Spiderman", version: "versión No Way Home", categoria: "Peliculas", subcategoria: "Spiderman", tamanio: "mediano", precio: 2000, stock: 2, id: 3},
    {nombre: "Deadpool", version: "única versión ", categoria: "Peliculas", subcategoria: "Deadepool ", tamanio: "mediano", precio: 2500, stock: 2, id: 4},
    {nombre: "Angus Young", version: "única versión ", categoria: "Musica", subcategoria: "ACDC ", tamanio: "mediano", precio: 3000, stock: 3, id: 5},
    {nombre: "Cersei Lannister", version: "única versión ", categoria: "Series", subcategoria: "Game of Thrones ", tamanio: "mediano", precio: 3500, stock: 1, id: 6},
    {nombre: "Saul Goodman", version: "única versión ", categoria: "Series", subcategoria: "Better Call Saul ", tamanio: "mediano", precio: 3600, stock: 3, id: 7},
    {nombre: "Thanos", version: "versión sin mano ", categoria: "Peliculas", subcategoria: "Avengers ", tamanio: "grande", precio: 6000, stock: 9, id: 8},
    {nombre: "Blue", version: "única versión ", categoria: "Peliculas", subcategoria: "Jurassic World ", tamanio: "chico", precio: 1200, stock: 5, id: 9},
    {nombre: "Harry Potter", version: "versión Caliz de Fuego ", categoria: "Peliculas", subcategoria: "Harry Potter ", tamanio: "mediano", precio: 2000, stock: 5, id: 10},
    {nombre: "Yoda", version: "versión Baby Yoda", categoria: "Peliculas", subcategoria: "Star Wars ", tamanio: "chico", precio: 1100, stock: 4, id: 11},

];


const ItemDetailContainer = ({greeting}) => {
    const [funko, setFunko] = useState({});
    const {idFunko} = useParams()

    useEffect(()=>{
        const funkoSeleccionado = funkos.find((funk)=>
        funk.id == idFunko
        );
        setFunko(funkoSeleccionado)
    }, [])

    return (
        <>      
            {/* <h2 style={styles.greeting}>{greeting}</h2> */}
            <ItemDetail key={funko.id} detalle={funko} />
            
        </>
    );
};

export default ItemDetailContainer;