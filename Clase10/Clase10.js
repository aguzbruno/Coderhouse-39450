// let nombreGuardado = sessionStorage.getItem('nombre')

// if(nombreGuardado){
//     alert(`Bienvenido ${nombreGuardado}`)
// } else{
//     let nombre = prompt('Ingrese su nombre');
//     let apellido = prompt('Ingrese su apellido');
//     sessionStorage.setItem('nombreYApellido',nombre);
//     sessionStorage.setItem('apellido',apellido);
//     sessionStorage.setItem('array',[1,2,3,4])
//     sessionStorage.setItem('objeto',{nombre:nombre})
// }

// //Ciclo para recorrer las claves almacenadas en el objeto localStorage
// for (let i = 0; i < sessionStorage.length; i++) {
//     let clave = sessionStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ sessionStorage.getItem(clave));
// }

// console.log(sessionStorage.getItem('array'))

// const producto1 = { id: 2, producto: "Arroz" };
// localStorage.setItem("producto1", producto1);

//Transformando nuestro objeto en un JSON
// const enJSON  = JSON.stringify(producto1);
// localStorage.setItem("producto1", enJSON);
// let productoLocalStorage = localStorage.getItem('producto1')
// console.log(typeof productoLocalStorage)
// productoLocalStorage = JSON.parse(productoLocalStorage)
// console.log(productoLocalStorage)
// console.log(typeof productoLocalStorage)

// const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
//                   {  id: 2,  producto: "Fideo", precio: 70 },
//                   {  id: 3,  producto: "Pan"  , precio: 50},
//                   {  id: 4,  producto: "Flan" , precio: 100}];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// //Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));

// const mostrarLocal = (clave) => { console.log(JSON.parse(localStorage.getItem(clave))) };
// //Almacenar producto por producto
// for (const producto of productos) {
//     mostrarLocal(producto.id);
// }
// // o almacenar array completo
// mostrarLocal("listaProductos");


// const productosTotales = [{ id: 1, producto: "Arroz", precio: 125 },
// { id: 2, producto: "Fideo", precio: 70 },
// { id: 3, producto: "Pan", precio: 50 },
// { id: 4, producto: "Flan", precio: 100 }];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// guardarLocal("listaProductos", JSON.stringify(productosTotales));


// class Producto {
//     constructor(obj) {
//         this.nombre = obj.producto.toUpperCase();
//         this.precio = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const carrito = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados) {
//     carrito.push(new Producto(objeto));
// }
// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of carrito) producto.sumaIva();

// console.log(carrito)
function pedirDatosYGuardarlos(){
    let nombre = prompt('Ingrese su nombre')
    let apellido = prompt('Ingrese su apellido')
    let usuario = {nombre,apellido}
    localStorage.setItem('usuario',JSON.stringify(usuario))
}

function trabajarLocal(){
    let localUsuario = JSON.parse(localStorage.getItem('usuario'))
    if(localUsuario){
        console.log(localUsuario)
    }else{
        pedirDatosYGuardarlos()
    }
}
trabajarLocal()









