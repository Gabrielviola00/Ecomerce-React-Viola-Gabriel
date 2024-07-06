# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Proyecto de E-commerce de Suplementos - Freya
Este proyecto de e-commerce tiene como objetivo simular una tienda online de suplementos nutricionales. Permite a los usuarios navegar por diferentes categorías de productos, ver detalles de cada producto y agregar productos al carrito para proceder al checkout.

Tecnologías Utilizadas

React: Utilizado para la construcción de la interfaz de usuario.
React Router: Para la navegación dentro de la aplicación.
Firebase Firestore: Base de datos utilizada para almacenar y consultar los productos.
Bootstrap: Para estilos y componentes UI.
Context API: Para el manejo del estado global de la aplicación, en particular para el carrito de compras.
Estructura del Proyecto
El proyecto está organizado en componentes y containers:

App.jsx: Componente principal que configura las rutas y provee el contexto del carrito.
NavBar.jsx: Barra de navegación que muestra las categorías disponibles y el carrito de compras.
ItemListContainer.jsx: Contenedor que muestra una lista de productos según la categoría seleccionada.
ItemDetailContainer.jsx: Contenedor que muestra los detalles de un producto específico.
Cart.jsx: Componente que muestra los productos agregados al carrito y permite gestionarlos.
Checkout.jsx: Componente que confirma los detalles de compra y permite realizar el checkout.
Uso de Contexto y Estado Global

Se utiliza el Context API de React para manejar el estado global del carrito de compras (CartContext). Esto permite agregar productos al carrito, eliminar productos, ajustar cantidades y vaciar el carrito desde cualquier parte de la aplicación.