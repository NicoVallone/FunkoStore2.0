import React, {useEffect, useState} from "react";
import './ItemListContainer.style.js'
import { styles } from "./ItemListContainer.style";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";




const funkos = [
    {nombre: "Jon Snow", version: "versión Lord Comander", categoria: "series", subcategoria: "Game of Thrones", tamanio: "mediano", precio: 3000, stock: 5, id: 0},
    {nombre: "Michael Jordan", version: "única versión", categoria: "deportes", subcategoria: "Chicago Bulls", tamanio: "mediano", precio: 3000, stock: 6, id: 1},
    {nombre: "Freddy Mercury", version: "versión Live Aid ", categoria: "musica", subcategoria: "Queen ", tamanio: "mediano", precio: 2500, stock: 1, id: 2},
    {nombre: "Spiderman", version: "versión No Way Home", categoria: "peliculas", subcategoria: "Spiderman", tamanio: "mediano", precio: 2000, stock: 2, id: 3},
    {nombre: "Deadpool", version: "única versión ", categoria: "peliculas", subcategoria: "Deadepool ", tamanio: "mediano", precio: 2500, stock: 2, id: 4},
    {nombre: "Angus Young", version: "única versión ", categoria: "musica", subcategoria: "ACDC ", tamanio: "mediano", precio: 3000, stock: 3, id: 5},
    {nombre: "Cersei Lannister", version: "única versión ", categoria: "series", subcategoria: "Game of Thrones ", tamanio: "mediano", precio: 3500, stock: 1, id: 6},
    {nombre: "Saul Goodman", version: "única versión ", categoria: "series", subcategoria: "Better Call Saul ", tamanio: "mediano", precio: 3600, stock: 3, id: 7},
    {nombre: "Thanos", version: "versión sin mano ", categoria: "peliculas", subcategoria: "Avengers ", tamanio: "grande", precio: 6000, stock: 9, id: 8},
    {nombre: "Blue", version: "única versión ", categoria: "peliculas", subcategoria: "Jurassic World ", tamanio: "chico", precio: 1200, stock: 5, id: 9},
    {nombre: "Harry Potter", version: "versión Caliz de Fuego ", categoria: "peliculas", subcategoria: "Harry Potter ", tamanio: "mediano", precio: 2000, stock: 5, id: 10},
    {nombre: "Yoda", version: "versión Baby Yoda", categoria: "peliculas", subcategoria: "Star Wars ", tamanio: "chico", precio: 1100, stock: 4, id: 11},
];

const obtenerFunkos = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        resolve(funkos);
    }, 2000);
});


const ItemListContainer = ({greeting}) => {
    const [funkos, setFunkos] = useState([]);
    const { idCategoria } = useParams()
    console.log(idCategoria)

    useEffect(()=>{
        const funkosCategoria = funkos.filter((funk)=>
        funk.categoria == idCategoria
        )
        obtenerFunkos
        .then((data)=>{
            (idCategoria ? setFunkos(funkosCategoria): setFunkos(data)) 
        })
        .catch((error)=> {
            console.log(`Salió todo mal`)
        })
    }, [idCategoria])

    return (
        <>      
            <h2 style={styles.greeting}>{greeting}</h2>
            <ItemList listado={funkos} />
            
        </>
    );
};

export default ItemListContainer;