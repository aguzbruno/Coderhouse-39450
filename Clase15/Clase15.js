
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( (resp) => resp.json() )
//     .then( (data) => {

//         data.forEach((post) => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//                 <td>${post.title}</td>
//                 <p>${post.body}</p>
//             `
//             document.body.append(li)
//         })
//     })

// function obtenerPokemon(pokemon) {
// fetch(`https://pokeapi.co/api/v2/pokemon`)// Devuelve promesa -- fullfilled o rejected
//     .then((resp) => resp.json()) // Devuelve promesa -- fullfilled o rejected
//     .then((data) => {
//         data.results.forEach((element) => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//                 <td>${element.name}</td>
//             `
//             document.body.append(li)
//         })
//     })
//     .catch((error) => { console.log(error) })
// }
// console.log(obtenerPokemon('charmander'))
// console.log(pokemonSolicitado)

// let datosDelUsuario = {nombre:e.target.value}
//    let datosDelUsuario = {
//     title: 'Coderhouse',
//     body: 'Post de prueba',
//     userId: 1,
// }
// enviarFormulario(datosDelUsuario)

// function enviarFormulario(datosDelUsuario) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(datosDelUsuario),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => { console.log(error) })

// }

fetch('./data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>$${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `

            document.body.append(li)
        })
    })

async function obtenerJson() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json()
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
            <td>${post.title}</td>
            <p>${post.body}</p>
        `
            document.body.append(li)
        })
    } catch (error) {
        console.log(error)
    }

}
obtenerJson()

