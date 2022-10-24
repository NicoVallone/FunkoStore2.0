import React from "react";
import './ItemCount.style.js'
import { styles } from "./ItemCount.style";
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(1);
    
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const restar = () => {
        if (contador != 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div style={styles.general}>
            <div style={styles.count}>
                <button onClick={restar} style={styles.button_restar}>-</button>
                <h4>{contador}</h4>
                <button onClick={sumar} style={styles.button_sumar}>+</button>
            </div>
            <button disabled={stock===0} onClick={()=>onAdd(contador)}>AGREGAR AL CARRITO</button>
        </div>
    );
};


export default ItemCount;
