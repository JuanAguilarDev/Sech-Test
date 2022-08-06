'use strict'
var img = document.querySelector("#sech");
var p = document.getElementById("res");
var mensaje = document.createTextNode("No tienes un resultado aun. ");
console.log(localStorage.getItem("Resultado"));
if (localStorage.getItem("Resultado") == null) {
    p.append(mensaje);
} else {
    p.append(localStorage.getItem("Nombre") + " " + localStorage.getItem("Apellido") + " es: " + localStorage.getItem("Resultado"));
}
var nombre = localStorage.getItem("Resultado").trim();
console.log(nombre);
img.innerHTML = `<img src = "../img/${nombre}.jpg">`;
localStorage.removeItem("Resultado");
localStorage.removeItem("Nombre");
localStorage.removeItem("Apellido");