import React  from 'react';
import {styles} from "./Item.Style"
import "./Item.Style"
import deadpool from "../../../Assets/Deadpool.jpg"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"


const onAdd=(contador)=> {
    console.log(`Agregaste ${contador} producto al carrito`)
  }  

const Item = ({datos}) => {
    return(
    <div style={styles.card}>
        <img style={styles.img} src={deadpool} alt="" />
        <div style={styles.info}>
            <h3>{datos.nombre}</h3>
            <span> {datos.subcategoria} </span>
            <Link to={"/producto/" + datos.id} >Ver más...</Link>
            <ItemCount stock={datos.stock} initial={1} onAdd={onAdd} />
        </div>
     </div>
    
    
    )
}

export default Item;

 