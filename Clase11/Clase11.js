const productos = [
    {id:1,nombre:'arroz',precio:300},
    {id:2,nombre:'leche',precio:200},
    {id:3,nombre:'yerba',precio:500},
    {id:4,nombre:'queso',precio:400},
]
const carrito = []

function listarProductos(){
    for (const producto of productos){
        let cardProducto = document.createElement('div')
        cardProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <h3>$ ${producto.precio}</h3>
            <button class="button" id=${producto.id} >Agregar al carrito</button>
        `
        cardProducto.className = 'card'
        let lista = document.getElementById('listProductos')
        lista.append(cardProducto)
        let botonParaAgregar = document.getElementById(`${producto.id}`)
        botonParaAgregar.addEventListener('click',agregarAlCarrito)
    }
}
function agregarAlCarrito(e){
    let id = Number(e.target.getAttribute('id'))
    let productoAAgregar = productos.find((producto)=>producto.id === id)
    if(existeEnCarrito(productoAAgregar)){
        let productoEnCarrito = carrito.find((producto)=>producto.id === productoAAgregar.id)
        let indiceDelProducto = carrito.indexOf(productoEnCarrito)
        carrito[indiceDelProducto].cantidad+=1
        let productoAnterior = document.getElementById(`producto${productoAAgregar.id}`)
        productoAnterior.innerHTML = `
            <h3>${productoAAgregar.nombre}</h3>
            <h3>$ ${productoAAgregar.precio}</h3>
            <h3>Cantidad: ${carrito[indiceDelProducto].cantidad}</h3>
            <h3>Total de ${productoAAgregar.nombre} : $ ${carrito[indiceDelProducto].cantidad*productoAAgregar.precio}</h3>
        `
    }else{
        let productoConCantidad = {...productoAAgregar,cantidad:1}
        carrito.push(productoConCantidad)
        let cardCarrito = document.createElement('div')
        cardCarrito.innerHTML = `
            <h3>${productoConCantidad.nombre}</h3>
            <h3>$ ${productoConCantidad.precio}</h3>
            <h3>Cantidad: 1</h3>
        `
        cardCarrito.setAttribute('id',`producto${productoConCantidad.id}`)
        let carritoContendor = document.getElementById('carrito')
        carritoContendor.append(cardCarrito)
    }
}
function existeEnCarrito(productoAChequear){
    // if(carrito.find((producto)=>producto.id === productoAChequear))return true
    // else return false
    return(carrito.some((producto)=>producto.id === productoAChequear.id))
    // for (producto of carrito){
    //     if(productoAChequear.id === producto.id){
    //         return true
    //     }
    // }
    // return false
}

listarProductos()
