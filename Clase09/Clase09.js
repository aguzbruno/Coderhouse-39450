// OPCION 1

// let botonPrincipal = document.getElementById('btnPrincipal')
// function tipoDeRespuesta(evento){
//     botonPrincipal.addEventListener(evento,respuestaClick)
// }
// tipoDeRespuesta('mouseleave')



// function respuestaClick(){
//     console.log('Me hicieron click')
// }

// OPCION 2

// let botonPrincipal = document.getElementById('btnPrincipal')

// botonPrincipal.onclick = ()=>{console.log('Me hicieron click')}

// let botonPrincipal = document.getElementById('btnPrincipal')

// botonPrincipal.addEventListener('click',respuestaClick)

// function respuestaClick(){
//     console.log('se activo el evento')
// }

// let inputNombre = document.getElementById('inputNombre')

// inputNombre.addEventListener('change',respuestaInput)

// function respuestaInput(e){
//     console.log(e.target.value)
//     // console.log('se activo el evento del teclado')
// }

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     console.log(e)

//     let formulario = e.target
//     console.log(e.target[0])
//     console.log(e.target[0].value)
//     alert('Se han enviado correctamente los datos')
//     // console.log("Formulario Enviado");    
// }

// let inputNombre = document.getElementById('inputNombre')
// inputNombre.addEventListener('input',validarInput)

// function validarInput(e){
//     e.preventDefault();
//     console.log(e.target)
// }

// let miFormulario = document.getElementById('formulario')
// miFormulario.addEventListener('submit',mostrarMensaje)

// function mostrarMensaje(e){
//     e.preventDefault()
//     let divUsuarios = document.getElementById('usuarios')
//     let nombreUsuario = e.target[0].value
//     let edad = e.target[1].value
//     let nodo = document.createElement('div')
//     nodo.innerHTML = `Usuario: <li> ${nombreUsuario}</li><li>${edad}</li>`
//     if(e.target[1].value <50){
//         nodo.className = 'chico'
//     } else{
//         nodo.className = 'adulto'
//     }

//     divUsuarios.append(nodo)
// }







