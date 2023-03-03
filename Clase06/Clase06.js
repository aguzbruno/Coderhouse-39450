// const arrayDeNumeros = [1,2,3,4,5]
// const arrayDeBoolean = [arrayDeNombres,false,true,false]


// const arrayDeNombres = []



// for(let i = 0 ;i<5;i++){
//     let nombreAAgregar = prompt('Ingrese su nombre')
//     if(nombreAAgregar === 'Cesar'){
//         arrayDeNombres.unshift(nombreAAgregar) //Agrega un elemento al principio del array
//     }else{
//         arrayDeNombres.push(nombreAAgregar) //Agrega un elemento al final del array
//     }
    
//     console.log(arrayDeNombres) 
// }
// arrayDeNombres.shift()//Elimina el primer elemento del array
// arrayDeNombres.pop()//Elimina el ultimo elemento del array
// arrayDeNombres.splice(1,2) // El primer parametro es desde donde trabajamos (indice 1), y el segundo es cuantos borramos
// const nuevoArrayDeNombres = arrayDeNombres.slice(1,2) //

const arrayDeNombres = ['Federico','Nahuel','Antonela','Camila','Cesar']
// const arrayDeNombres2 = ['Tomas','Luciano','Ariel','Alvaro','Agustin']

// console.log(arrayDeNombres.join('. '))
// console.log(arrayDeNombres.concat(arrayDeNombres2))
// console.log(arrayDeNombres) 
// console.log(arrayDeNombres.includes('Alvaro'))
// console.log(arrayDeNombres.includes('Nahuel'))
// console.log(arrayDeNombres.reverse())
// console.log(arrayDeNombres.indexOf('Nahuel'))
// console.log(arrayDeNombres.indexOf('asdok'))



// for (let index = 0;index<arrayDeNombres.length;index++){
//     console.log(index);
//     if(arrayDeNombres[index] === 'German'){
//         console.log('Encontramos a German'+(index+1));
//         break
//     }
// }

// //Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//     let nombreAIngresar = prompt('Ingrese su nombre')
//     listaNombres.push(nombreAIngresar)
//     console.log(listaNombres.length) // El length va a ser 1
// }while(listaNombres.length != cantidad)

// // //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// // //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));
// console.log(listaNombres)

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa','Sofia']

// function eliminar(nombre){
    
//     let indiceDeNombre = nombres.indexOf(nombre)
//     if(indiceDeNombre>0){
//         nombres.splice(indiceDeNombre,1)
//     }else{
//         alert('Ese nombre no existe en el array')
//     }
// }

// eliminar('Sofia')
// console.log(nombres)


class Producto {
    constructor(){
        this.nombre = prompt('Ingrese el nombre del producto')
        this.precio = parseInt(prompt('Ingrese el precio del producto'))
    }
}

const arrayDeProductos = []
let seguirComprando = true
while(seguirComprando){
    let productoIngresado = new Producto()
    arrayDeProductos.push(productoIngresado)

    let finalizaCompra = parseInt(prompt('Ingrese 1 si quiere seguir comprando 2 para salir'))
    if(finalizaCompra === 2){
        seguirComprando = false;
    }
}

function mostrarTotal(){
    let precioTotal = 0
    for (producto of arrayDeProductos){
        precioTotal = precioTotal+ producto.precio
    }
    return precioTotal
}

console.log(mostrarTotal())




