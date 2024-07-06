import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../componentes/ComponentesDePresentacion/ItemDetail/itemDetail';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ItemDetailContainer = () => {
  const { idItem } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const proteinasQuery = getDocs(collection(db, "proteinas"));
        const creatinasQuery = getDocs(collection(db, "Creatinas"));
        const multivitaminicosQuery = getDocs(collection(db, "Multivitaminicos"));

        const [proteinasSnapshot, CreatinasSnapshot, MultivitaminicosSnapshot] = await Promise.all([proteinasQuery, creatinasQuery, multivitaminicosQuery]);

        const allProducts = [
          ...proteinasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
          ...CreatinasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
          ...MultivitaminicosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        ];

        const foundProduct = allProducts.find(prod => prod.id.toString() === idItem);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error al obtener el producto: ", error);
      }
    };

    obtenerProducto();
  }, [idItem]);

  return (
    <div className='contenedor'>
      {product ? <ItemDetail producto={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;
