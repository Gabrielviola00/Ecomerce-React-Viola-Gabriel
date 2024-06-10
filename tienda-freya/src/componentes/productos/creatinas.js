import imagencreatinaGentech from '../img/creatinas/creatinaGentech.webp'
import imagencreatinaMervick from '../img/creatinas/creatinaMervick.webp'
import imagencreatinaGold from '../img/creatinas/creatinaGold.webp'
import imagencreatinaStar from '../img/creatinas/creatinaStar.webp'

function Creatina (id,nombre,precio, peso,imagen, descripcion){
    this.id = id;
    this.nombre = nombre;
    this.precio= `Precio: $${precio}`;
    this.peso = `Contenido del envase ${peso}kg`;
    this.imagen = imagen
    this.descripcion = descripcion;
    

}
const creatinaGentech = new Creatina(9,'Creatina Gentech',5000,500,imagencreatinaGentech,'La creatina Gentech es ideal para quienes buscan mejorar su rendimiento deportivo. Formulada para aumentar la fuerza y la resistencia, esta creatina micronizada se absorbe rápidamente, garantizando resultados efectivos en tus entrenamientos.')
const creatinaMervick = new Creatina (10,'Creatina Mervick',4500,300,imagencreatinaMervick,'Creatina Mervick ofrece una fórmula pura y potente que optimiza el rendimiento muscular. Perfecta para atletas y culturistas, ayuda a incrementar la fuerza y la recuperación, permitiéndote alcanzar tus metas más rápido y con mayor eficacia.')
const creatinaGold = new Creatina (11,'Creatina Gold ',3800,350,imagencreatinaGold,'Creatina Gold se destaca por su alta calidad y pureza. Diseñada para maximizar la energía y la fuerza durante los entrenamientos intensos, esta creatina es una excelente opción para quienes buscan un suplemento confiable y efectivo.')
const creatinaStar = new Creatina (12,'Creatina Star',6000,400,imagencreatinaStar,'La creatina Star es una solución avanzada para potenciar tus sesiones de ejercicio. Con una fórmula refinada que mejora la absorción y la biodisponibilidad, garantiza un aumento notable en la potencia y la resistencia muscular.')

const creatinas = [creatinaGentech,creatinaMervick,creatinaGold,creatinaStar]

export {Creatina,creatinas }
