import React from "react";

const ItemDetail = ({detalle}) => {
  return (
    <div>
      {/* <img  src={detalle.image} /> */}
      <h1>{detalle.nombre}</h1>
      <h2>{detalle.subcategoria}</h2>
      <span>{detalle.categoria}</span>
      <h3>{detalle.precio}</h3>
    </div>
  );

};

export default ItemDetail;