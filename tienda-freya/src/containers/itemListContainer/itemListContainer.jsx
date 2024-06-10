import React from "react";
import ItemList from "../../componentes/ComponentesDePresentacion/itemList/ItemList";
import '../itemListContainer/itemList.css';
import { proteinas } from "../../componentes/productos/proteinas";
import { creatinas } from "../../componentes/productos/creatinas";
import { multivitaminicos } from "../../componentes/productos/multivitaminicos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { idcategory } = useParams();

  let productosAMostrar;

  switch (idcategory) {
    case 'proteinas':
      productosAMostrar = proteinas;
      break;
    case 'creatinas':
      productosAMostrar = creatinas;
      break;
    case 'multivitaminicos':
      productosAMostrar = multivitaminicos;
      break;
    default:
      productosAMostrar = [...proteinas, ...creatinas, ...multivitaminicos];
      break;
  }

  return (
    <div>
      <ItemList productos={productosAMostrar} />
    </div>
  );
};

export default ItemListContainer;




