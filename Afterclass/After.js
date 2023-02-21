function datosDelUsuario(){
    let nombre = prompt('Ingrese su nombre')
    let apellido = prompt('Ingrese su apellido')
    let dni = prompt('Ingrese su DNI')
    return (nombre + ' '+ apellido + ' ' + dni)
}

function eleccionDeProductos(parametro1){
    let sumaTotal = 0;
    let seleccionSeguirComprando; 
    do{
        let productoSeleccionado = parseInt(prompt('Seleccione un producto 1:Heladera \n 2:Aspiradora,\n 3: colchon,\n 4:Mochila,\n 5:JBL'));
        let noSeleccionoProducto = false
        if(productoSeleccionado === 1){
            sumaTotal = sumaTotal+291999
        }else if(productoSeleccionado === 2){
            sumaTotal = sumaTotal+29999
        }else if(productoSeleccionado === 3){
            sumaTotal = sumaTotal+36799
        }else if(productoSeleccionado === 4){
            sumaTotal = sumaTotal+10175
        }else if(productoSeleccionado === 5){
            sumaTotal = sumaTotal+15724
        }else{
            noSeleccionoProducto = true
            alert('Ha ingresado un producto inexistente')
        }

        // switch (productoSeleccionado){
        //     case 1:
        //         sumaTotal = sumaTotal+291999
        //     break;
        //     case 2:
        //         sumaTotal = sumaTotal+29999
        //     break;
        //     case 3:
        //         sumaTotal = sumaTotal+36799
        //     break;
        //     case 4:
        //         sumaTotal = sumaTotal+10175
        //     break;
        //     case 5:
        //         sumaTotal = sumaTotal+15724
        //     break;
        //     default:
        //         alert('Ha ingresado un producto inexistente')
        //     break;
        // }
        if(noSeleccionoProducto){
            alert('El total hasta el momento es de :' + sumaTotal)
        }
        seleccionSeguirComprando = prompt('Quiere continuar comprando? 1:Si, 2:No')
    }while(seleccionSeguirComprando === 1)


    let alertaParaMostar = ('Gracias'+ parametro1 + 'ha gastado el total de: $' + sumaTotal)
    return alertaParaMostar
}
window.addEventListener('load',function(){
    let stringConDatosDelUsuario = datosDelUsuario()
        alert(eleccionDeProductos(stringConDatosDelUsuario))
})