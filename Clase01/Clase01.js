// Usuario debe ingresar su edad
// EdadJubilatoria = 65 años
// Tenemos que calcular en que año se jubila y mostrarlo en una alerta.
// año 2023
// Ingrese su edad, restarle a la edad jubilatoria
// la edad del usuario, sumarle al año en curso,
// la edad del resultado.

const edadUsuario = parseInt(prompt('Ingrese su edad'))
// const edadUsuario = Number(prompt('Ingrese su edad'))
const edadJubilatoria = 65
const ano = 2023
let anosFaltantesParaJubilarse =edadJubilatoria - edadUsuario
let anoJubilatorio = ano + anosFaltantesParaJubilarse
let anosParaJubilarse = edadJubilatoria-edadUsuario
alert(anoJubilatorio);
alert(`Los años que faltan para jubilarse : ${anosParaJubilarse}`);







