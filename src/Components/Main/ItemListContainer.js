import React from "react";
import './ItemListContainer.style.js'
import { styles } from "./ItemListContainer.style";


const ItemListContainer = ({greeting}) => {

    return (
        <h2 style={styles.greeting} >{greeting}</h2>
    );
};

export default ItemListContainer;