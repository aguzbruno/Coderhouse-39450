// let mayorA1000 = (precioTotal >= 1000)
// let precioTotal = 1500
// let mayorA500 = (precioTotal >= 500)
// let mayorA200 = (precioTotal >= 200)


// // billete 500 y billete de 1000 billete 200
// if (precioTotal >= 1000) {
//     alert('Usted debe pagar con billete de $1000')
// } else if (precioTotal >= 500) {
//     alert('Usted debe pagar con billete de $500')
// } else if (precioTotal >= 200) {
//     alert('Usted debe pagar con billete de $200')
// } else {
//     alert('Usted debe pagar menos de 200')
// }


// Dependiendo de la edad que ingrese el usuario
// la respuesta en un alert sera: 
// niño = 0 a 10 años
// adolescente = 11 a 18 años
// adulto = 19 a 80
// anciano = 81 a 100

// const ingresarEdad = prompt('Ingrese su edad')
// let nombre = 'Federico';
// let edad

// if (!edad){
//     alert('Hola Tomas');
// } else {
//     alert('Hola');
// }


let edad = parseInt(prompt('Ingrese su edad'));
let nino = (edad >=0 && edad<=10)
let adolescente = (edad >=11 && edad<=18)
let adulto = (edad >=19 && edad<=80)
let anciano = (edad >=81 && edad<=100)

// console.log(nino)
// console.log(adolescente)
// console.log(adulto)
// console.log(anciano)


// if(nino) {
//     alert('Es un niño')
// } else if(adolescente){
//     alert('Es un adolescente')
// }else if(adulto){
//     alert('Es un adulto')
// } else if (anciano){
//     alert('Es un anciano')
// } else{
//     alert('Ingrese la edad correctamente')
// }

switch (true) {
    case (edad >=0 && edad<=10):
        alert('Es un niño');
        break;
    case edad >=11 && edad<=18:
        alert('Es un adolescente')
        break;
    default:
        alert('Ingrese la edad correctamente')
        break;
}




