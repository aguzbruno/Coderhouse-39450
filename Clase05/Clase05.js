
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
// const persona1 = { nombre: "", edad: 39, calle: "Av. Siempreviva 742" }
// console.log(persona1)

// persona1.nombre = 'Cesar'
// persona1["nombre"] = 'Nahuel'
// persona1.edad = 30
// console.log(persona1)

// function Persona(nombre, edad, calle,funcion) {
//     this.nombre = nombre;
//     this.edad 	 = edad;
//     this.calle  = calle;
//     this.saludarANosotrosMismos = function(){ console.log('Hola'+' '+ this.nombre)}
// }

// const persona1 = new Persona('Homero',39,"Av. Siempreviva 742");

// persona1.saludarANosotrosMismos()




// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// function Persona(literal) {
//     this.nombre = literal.nombre;
//     this.edad   = literal.edad;
//     this.calle  = literal.calle;
// }

// const persona1 = new Persona({ calle: "Av.Siempreviva 742" ,edad: 39,nombre: "Homero" });

// console.log(persona1)

// let cadena = "hola coder";
//Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());

// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
// const persona2 = { nombre: "Nicolas", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "apellido" in persona1);
// //recorremos todas las propiedades del objeto con el ciclo for...in


// const persona5 = {  edad: 39, calle: "Av. Siempreviva 742",nombre: "Homero"};

// for (const propiedad in persona5) {
   
//     if(persona5[propiedad] === 'Homero'){
//         console.log('Encontramos a Homero')
//     }else{
//         console.log(persona5[propiedad])
//     }

//     if (propiedad === 'nombre'){
//         persona5.nombre = 'Mauricio'
//         console.log(persona5)
//     }
// }

// class Persona {
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//     }
//     saludar(){
//         console.log('Hola'+' '+ this.nombre)
//     }
// }

// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");


// persona1.saludar();


// Crear una clase Auto que contenga las propiedades de: Marca,modelo,km y año.
// El usuario ingresara autos y respecto a sus km, y años, vamos a definir un metodo "promediokm" que brinde el kilometraje promedio por año del auto. 

//Los prompts se pueden pedir directamente en el constructor o en variables como parametros.
// class Auto{
//     constructor(){
//         this.marca = prompt('Ingrese la marca del auto')
//         this.modelo = prompt('Ingrese el modelo del auto')
//         this.km = parseInt(prompt('Ingrese los km del auto'))
//         this.ano = parseInt(prompt('Ingrese el año de fabrica del auto'))
//     }
//     promediokm(){
//         const anosDelAuto = 2023-this.ano
//         const promedioDeKm = this.km/anosDelAuto
//         return promedioDeKm
//     }
// }

// const auto1 = new Auto()
// console.log(auto1.promediokm())








