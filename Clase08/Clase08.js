//getElementById
//getElementByClassName
//getElementByTagName
// let parrafos = document.getElementsByClassName("parrafo")
// console.log(document.getElementById("contenedor"))
// console.log(document.getElementsByTagName('div'))

// for (const elemento of parrafos){
//     console.log(elemento.innerHTML)
// }

// let titulo = document.getElementById('titulo')
// titulo.innerText = 'Clase 10'
// titulo.innerHTML = '<h2>Clase10</h2><p>Breve descripcion</p>'
// titulo.className = 'clase3'

// console.log(titulo)

// let palabraUsuario = prompt('Ingrese una palabra')

// let parrafoNuevo = document.createElement("p")
// parrafoNuevo.innerText = palabraUsuario
// document.body.append(parrafoNuevo)
// let palabraUsuario = prompt('Ingrese una palabra')

// let divNuevo = document.createElement("div")
// divNuevo.innerHTML = "<p>"+palabraUsuario+"</p>"
// document.body.append(divNuevo)

// remover id titulo
// let titulo = document.getElementById('titulo')
// titulo.remove()

// let tipoDeEtiqueta = prompt('Ingrese la etiqueta')

// if(tipoDeEtiqueta === 'h1'){
//     let parrafoNuevo = document.createElement("h1")
//     parrafoNuevo.innerText = 'Coderhouse'
//     document.body.append(parrafoNuevo)
// }else{
//     let parrafoNuevo = document.createElement("h5")
//     parrafoNuevo.innerText = 'Coderhouse'
//     document.body.append(parrafoNuevo)
// }
// console.log(tipoDeEtiqueta)

//Refactorizando lo de arriba en una funcion sin repetir codigo

// function newParrafo(){
//     let tipoDeEtiqueta = prompt('Ingrese la etiqueta')
//     let parrafoNuevo = document.createElement("h1")
//     if(tipoDeEtiqueta !== 'h1'){
//         parrafoNuevo = document.createElement("h5")
//     }
//     parrafoNuevo.innerText = 'Coderhouse'
//     document.body.append(parrafoNuevo)
//     console.log(parrafoNuevo)
// }
// newParrafo()


// document.getElementById("nombre").value = "HOMERO";
// document.getElementById("edad").value   = 39;

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
// let padre = document.getElementById("personas");
//Array con la información a agregar
// let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
// for (const persona of personas) {
//     //Creamos un nodo <li> y agregamos al padre en cada ciclo
//     let li = document.createElement("li");
//     li.innerHTML = persona
//     padre.appendChild(li);
// }

// let producto = { id: 1,  nombre: "Arroz", precio: 125 };
// let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
// let plantilla   = `ID : ${producto.id} - Producto ${producto.nombre}$ ${producto.precio}`;
// //El valor es idéntico pero la construcción de la plantilla es màs sencilla
// console.log(concatenado);
// console.log(plantilla);

// let producto = { id: 1, nombre: "Arroz", precio: 125 };
// let contenedor = document.createElement("div");
// //Definimos el innerHTML del elemento con una plantilla de texto
// contenedor.innerHTML = `<h1>Hola</h1> 
//                         <h2>Su compra fue:</h2>
//                         <h3> ID: ${producto.id}</h3>
//                         <p>  Producto: ${producto.nombre}</p>
//                         <b> $ ${producto.precio}</b> 
//                         `;
// //Agregamos el contenedor creado al body
// document.body.appendChild(contenedor);

// const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
//                   {  id: 2,  nombre: "Fideo", precio: 70 },
//                   {  id: 3,  nombre: "Pan"  , precio: 50},
//                   {  id: 4,  nombre: "Flan" , precio: 100}];

// for (const producto of productos) {
//     let contenedor = document.createElement("div");
//     //Definimos el innerHTML del elemento con una plantilla de texto
//     contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                             <p>  Producto: ${producto.nombre}</p>
//                             <b> $ ${producto.precio}</b>`;
//     document.body.appendChild(contenedor);
// }

// puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
// let parrafo = document.querySelector("#contenedor p")
// seleccionar sólo el contenedor por id con #
// let contenedorQuery = document.querySelector("#contenedor")
// let contenedorById = document.getElementById("contenedor")
// console.log(contenedorQuery)
// console.log(contenedorById)
// // o por clase:
// parrafo = document.querySelector(".texto")




