import React from "react";
import Item from "./Item";
import {styles} from "./ItemList.Style"


const ItemList = ({listado}) => {
    return(
    <>
    <div style={styles.listado}>
        {
            listado.map((funko)=>{
            return <Item datos={funko} />
            })
        }
    </div>
    </>
    )
}

export default ItemList;
