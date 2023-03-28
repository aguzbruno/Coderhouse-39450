let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = e.target[0].value
    let apellido = e.target[1].value
    let modal = document.createElement('div')
    modal.innerHTML = `Su nombre fue enviado: ${nombre} ${apellido}`
    document.body.appendChild(modal)
    setTimeout(() => {
        document.body.removeChild(modal)
    }, 3000)

})

// setTimeout(()=>{
//     console.log('Estamos aca')
// }, 0)
// console.log('Hola')
// console.log('Chau')
// function obtenerNumeros(){
//    setTimeout(()=>{
//     console.log('Estamos aca')
//     }, 3000)
// }

// function sumar(){
//     return obtenerNumeros()
// }

// sumar()
// console.log('Hola')

// let segundos = 0

// const interval = setInterval(() => {
//     segundos +=1
//     console.log(segundos)
//     if (segundos >= 5) {
//         clearInterval(interval)
//         console.log("Se removió el intervalo")
//     }
// }, 1000)

// function eventoFuturo(){
//     return new Promise( (resolve, reject) => {
//         //cuerpo de la promesa
//     } )
// }
// console.log( eventoFuturo() ) // Promise { <pending> }

// function eventoFuturo(res) {
//     return new Promise( (resolve, reject) => {

//     })
// }

// console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
// console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }

// function eventoFuturo(res) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             res ? resolve('Promesa Resuelta') : reject('Promesa rechazada')
//         }, 2000)
//     })
// }

// console.log( eventoFuturo(true) ) // Promise { <pending> }
// console.log( eventoFuturo(false) ) // Promise { <pending> }

// eventoFuturo(false)
//     .then( (response) => {
//         console.log(response) // Promesa resuelta
//     })

// eventoFuturo(true)
//     .then( (response) => {
//             console.log(response) // Promesa resuelta
//         })
//     .catch( (error) => {
//         console.log(error) // Promesa rechazada
//     })
//     .finally( () => {
//         console.log("Fin del proceso")
//     })

const BD = [
    {
        id: 1, producto: 'Arroz', precio: 100
    },
    {
        id: 2, producto: 'Fideos', precio: 500
    },
    {
        id: 3, producto: 'Pan', precio: 300
    }
]

function obtenerProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
            // reject('BD no disponible')
        }, 2000)
    })
}
let productos = []

obtenerProductos()
    .then((response)=>{
        productos = response
        mostrarProductos()
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('Fin del proceso')
    })

function mostrarProductos(){
    for (const producto of productos) {
        console.log(producto)
    }
}






