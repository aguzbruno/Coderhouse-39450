const autos = [
    {marca:'Chevrolet',modelo:'Corsa',precio:10000},
    {marca:'Chevrolet',modelo:'Agile',precio:11000},
    {marca:'Chevrolet',modelo:'Vectra',precio:12000},
    {marca:'Chevrolet',modelo:'Meriva',precio:13000},
    {marca:'Ford',modelo:'Focus',precio:14000},
    {marca:'Ford',modelo:'Escort',precio:17000},
    {marca:'Ford',modelo:'Ka',precio:16000},
    {marca:'Ford',modelo:'Fiesta',precio:18000},
    {marca:'Fiat',modelo:'Uno',precio:17000},
    {marca:'Fiat',modelo:'Cronos',precio:16000},
    {marca:'Fiat',modelo:'Panda',precio:18000}
]
const marcas = buscarMarcas(autos)
let autoSeleccionado

function buscarMarcas(autos){
    const marcasABuscar = []
    for (auto of autos){
        if(!marcasABuscar.includes(auto.marca)){
            marcasABuscar.push(auto.marca)
        }
    }
    return marcasABuscar
}

function crearSelect(tipoSelect,contenedor,array,idSelect){
    let select = document.createElement('select')
    select.innerHTML = `
    <option value="">Seleccione ${tipoSelect}</option>
    ${
        array.map((element)=>{
            return(
                `<option value=${element}>${element}</option>`
            )
        })
    }
    `
    select.setAttribute('id',idSelect)
    contenedor.append(select)
}

function handleEleccionAuto(e){
    const marcaSeleccionada = e.target.value
    const autoConModelo = autos.filter((auto)=> auto.marca === marcaSeleccionada)
    const modelos = autoConModelo.map((auto)=>{
        return(
            auto.modelo
        )
    })
    let selectModelo = document.getElementById('selectModelo')
    if(selectModelo){
        selectModelo.innerHTML = `
        <option value="">Seleccione el modelo..</option>
        ${
        modelos.map((modelo)=>{
            return(
                `<option value=${modelo}>${modelo}</option>`
            )
        })
    }
        `
    }else{
        crearSelect('el modelo',contenedorMarca,modelos,'selectModelo')
    }
    elegirModelo()

}

function elegirMarca(){
    const selectMarca = document.getElementById('selectMarca')
    selectMarca.addEventListener('change',handleEleccionAuto)
}

function elegirModelo(){
    const selectModelo = document.getElementById('selectModelo')
    selectModelo.addEventListener('change',handleEleccionModelo)
}
function handleEleccionModelo(e){
    const modeloSeleccionado = e.target.value
    autoSeleccionado = autos.find((auto)=>auto.modelo === modeloSeleccionado)
    console.log(autoSeleccionado)
}


function confirmarCotizacion(){
    let botonEnviar = document.getElementById('confirmar-seleccion')
    botonEnviar.addEventListener('click',mostrarPrecio)
}
function mostrarPrecio(){
    localStorage.setItem('cotizacion',JSON.stringify(autoSeleccionado))
    if(autoSeleccionado){
        let contenedorCotizacion =document.getElementById('cotizacion') 
        let cotizacion = document.createElement('div')
        cotizacion.innerHTML = `
            El precio para su cotizacion de su ${autoSeleccionado.marca}
             ${autoSeleccionado.modelo} es de ${autoSeleccionado.precio}
        `
        contenedorCotizacion.append(cotizacion)
    }else{ alert('Por favor seleccione su modelo a cotizar')}
}

let contenedorMarca = document.getElementById('seleccion')
let cotizacionLocal = JSON.parse(localStorage.getItem('cotizacion'))
console.log(cotizacionLocal)
if(cotizacionLocal){
    autoSeleccionado = cotizacionLocal
    mostrarPrecio()
}

crearSelect('La marca',contenedorMarca,marcas,'selectMarca')
// crearSelect('El modelo',contenedorMarca)
elegirMarca()
confirmarCotizacion()





