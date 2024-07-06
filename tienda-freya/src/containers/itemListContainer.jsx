import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/itemList/ItemList";
import '../containers/itemListContainer.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemListContainer = () => {
  const { idcategory } = useParams();
  const [productosAMostrar, setProductosAMostrar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      setLoading(true);
      setError(null);

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

        if (idcategory) {
          const filteredProducts = allProducts.filter(prod => prod.categoria === idcategory);
          setProductosAMostrar(filteredProducts);
        } else {
          setProductosAMostrar(allProducts);
        }
      } catch (error) {
        setError("Error al obtener los productos");
        console.error("Error al obtener los productos: ", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [idcategory]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ItemList productos={productosAMostrar} />
    </div>
  );
};

export default ItemListContainer;








