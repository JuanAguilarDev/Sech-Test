'use strict'

var fecha = new Date();

let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var numeroNombreDia = fecha.getDay();
var numeroNombreMes = fecha.getMonth();
var numeroDia = fecha.getDate();
var nombreDia = dias[numeroNombreDia];
var nombreMes = meses[numeroNombreMes];

var date = document.querySelector("#date");
date.innerHTML = nombreDia + " " + numeroDia + " de " + nombreMes;