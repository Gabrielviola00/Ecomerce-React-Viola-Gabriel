import imagenMultivitaminicoEna from '../img/multivitaminicos/multivitaminicoEna.webp'
import imagenMultivitaminicoGentech from '../img/multivitaminicos/multivitaminicoGentech.webp'
import imagenMultivitaminicoMervick from '../img/multivitaminicos/multivitaminicoMervick.webp'
import imagenMultivitaminicoStar from '../img/multivitaminicos/multivitaminicoStar.webp'

function Multivitaminico (id,nombre,precio,cantidad,imagen,descripcion){
    this.id = id
    this.nombre = nombre;
    this.precio = `Precio: $${precio}`;
    this.peso = `Contenido del envase: ${cantidad} unidades`;
    this.imagen = imagen
    this.descripcion = descripcion;
}

const multivitaminicoEna = new Multivitaminico (5,'Multivitaminico Ena',700,60,imagenMultivitaminicoEna,'Multivitamínico Ena ofrece una fórmula completa y balanceada para mantener tu salud en óptimas condiciones. Con una mezcla de vitaminas y minerales esenciales, este suplemento apoya tu energía diaria y fortalece el sistema inmunológico.')
const multivitaminicoGentech = new Multivitaminico (6,'Multivitaminico Gentech',350,30,imagenMultivitaminicoGentech,'El multivitamínico Gentech está diseñado para satisfacer todas tus necesidades nutricionales. Con una combinación de vitaminas y minerales de alta calidad, promueve el bienestar general, mejora la vitalidad y refuerza las defensas naturales del cuerpo.')
const multivitaminicoMervick = new Multivitaminico (7,'Multivitaminico Mervick',670,50,imagenMultivitaminicoMervick,'Multivitamínico Mervick proporciona una dosis óptima de nutrientes esenciales para tu cuerpo. Formulado para mejorar tu rendimiento físico y mental, este suplemento apoya la salud cardiovascular, el sistema inmunológico y la energía diaria.')
const multivitaminicoStar = new Multivitaminico (8,'Multivitaminico Star',950,90,imagenMultivitaminicoStar,'Multivitamínico Star es una solución integral para cubrir tus necesidades nutricionales diarias. Con una selección de vitaminas y minerales esenciales, ayuda a mantener la energía, la salud ósea y la función inmunológica, promoviendo un estilo de vida saludable.')

const multivitaminicos = [multivitaminicoEna,multivitaminicoGentech,multivitaminicoMervick,multivitaminicoStar]

export {Multivitaminico,multivitaminicos }