import imagenProteinaStar from '../img/proteinas/proteinaStarNutrition.webp'
import imagenProteinaMervick from '../img/proteinas/proteinaMervick.webp'
import imagenProteinaVegana from '../img/proteinas/proteina-vegana.webp'
import imagenProteinaGold from '../img/proteinas/proteinaGoldchocolate.webp'

function Proteina (id,nombre, precio, peso, sabor, descripcion,imagen){
    this.id = id
    this.nombre = nombre;
    this.precio = `Precio: $${precio}`;
    this.peso = `Contenido del envase: ${peso} kg`;
    this.sabor = sabor
    this.descripcion = descripcion;
    this.imagen = imagen
 }

 const proteinaStarNutrition = new Proteina (1,'Proteina Star Nutrition',2000,1,'Sabor: Frutilla','La proteína StarNutrition es una mezcla premium de suero de leche diseñada para maximizar el crecimiento muscular y la recuperación. Con un perfil de aminoácidos completo y rápida absorción, es ideal para atletas y entusiastas del fitness', imagenProteinaStar )
 const proteinaMervick = new Proteina (2,'Proteina Mervick',1800,1,'Sabor: Vainilla','La proteína Mervick ofrece una fórmula avanzada con suero de leche hidrolizado para una rápida asimilación y óptima síntesis proteica. Perfecta para después del entrenamiento, ayuda a reparar y construir músculo eficazmente.',imagenProteinaMervick )
 const proteinaVegana = new Proteina (3,'Proteina Gold vegana',2700,908,'Sin sabor', 'La proteína vegana es una combinación de proteínas de guisante, arroz y cáñamo, proporcionando una opción vegetal completa para la nutrición deportiva. Es libre de lactosa y gluten, ideal para quienes siguen una dieta vegana o tienen intolerancias alimentarias.', imagenProteinaVegana)
 const proteinaGolds = new Proteina (4,'Proteina Gold standar',2300,908,'Sabor: Chocolate', 'La proteína Golds está formulada con aislado de suero de leche de alta pureza, ofreciendo una alta concentración de proteínas por porción. Es perfecta para aquellos que buscan mejorar su rendimiento y aumentar su masa muscular sin añadir carbohidratos o grasas extras', imagenProteinaGold)

 const proteinas = [proteinaStarNutrition, proteinaMervick, proteinaVegana,proteinaGolds]

 export {Proteina,proteinas}