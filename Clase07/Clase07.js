// function sumarRango(desde,hasta){
//     let total = 0
//     for (let i = desde;i<=hasta;i++){
//         total += i 
//     }
//     console.log(total) //55
// }

// sumarRango(1,10)

// function mayorQue(n) {
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)

// console.log( mayorQueDiez(12) )  //  true
// console.log( mayorQueDiez(8) )  //  false

// function asignarOperacion(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     } else if (op == "restar") {
//         return (a, b) => a - b
//     }
// }

// let suma = asignarOperacion("sumar")
// let resta = asignarOperacion("restar")

// console.log( suma(4, 6) )  //  10
// console.log( resta(5, 3) )  //  2

// const numeros = [1,2,3,4]

// function porCadaUno (array,funcion){
//     for(const numero of array){
//         funcion(numero)
//     }
// }

// let total = 0
// function acumular(num) {
//     total += num
//     console.log(num,total)
// }

// porCadaUno(numeros,console.log)
// porCadaUno(numeros, acumular)
// console.log(total) // 10

// const numeros = [1,2,3,4]

// const productos = [
//     { nombre: 'Yerba', precio: 300 },
//     { nombre: 'Arroz', precio: 300 },
//     { nombre: 'Agua', precio: 250 },
//     { nombre: 'Leche', precio: 400 },
//     { nombre: 'leche', precio: 400 }]
// let total = 0

// productos.forEach( (producto)=> {
//     total+= producto[precio]
//     console.log(producto.nombre,producto.precio)
// })

// const busquedaUnica = productos.find((producto)=> producto.precio === 300)
// const busquedaGrupal = productos.filter((producto)=> producto.nombre === 300)
// const busqueda = productos.some((producto)=> producto.nombre === 'Arroz12')

// console.log(busquedaGrupal.length,busquedaGrupal)
// console.log(busquedaUnica.nombre)
// const productosAumentados = productos.map((producto)=>{ 
//     return (            {
//         producto :producto.nombre,
//         producto:producto.precio*1.15
//     }
//         )
// })


// const totalProductos = productos.reduce((total, producto) => total + producto.precio, 0)
// const ordenarPorPrecio = productos.sort((a, b) => a.precio - b.precio)
// const ordenarPorAlfabetico = productos.sort((a, b) => a.nombre.localeCompare(b.nombre))

// console.log(productosAumentados)



// const productos = [
//     { nombre: 'Yerba', precio: 300 },
//     { nombre: 'Arroz', precio: 300 },
//     { nombre: 'Agua', precio: 250 },
//     { nombre: 'Leche', precio: 400 },
//     { nombre: 'leche', precio: 400 }
// ]

// const productosAumentados = productos.map((producto) => {
//     return (
//         {
//             nombre: producto.nombre,
//             precio: Math.ceil(producto.precio * 1.15)
//         }
//     )
// })

// const numero = 9.40840

// console.log(numero.toFixed(2))
// console.log(Math.random()*30+10)
// console.log(Math.floor(numero))
// console.log(Math.round(numero))
// const navidad = new Date("December 25, 2023")
// const hoy = new Date("March 2, 2023")
// const milisegundosPorDia = 86400000
// console.log('Faltan estos dias para navidad.. ' + ((navidad-hoy)/milisegundosPorDia))
const hoy = new Date()
console.log(hoy.getFullYear())
console.log(hoy.getMonth())
console.log(hoy.getDay())


