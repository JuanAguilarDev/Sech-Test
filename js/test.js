'use strict'

var formulario = document.querySelector("#formulario");
console.log(formulario);
var resultadoTest = "";
var res = document.querySelector("#res");

if (typeof(Storage) != 'undefined') {
    console.log("Local storage disponible. ");
} else {
    console.log("Local storage no disponible. ");
}

function onlyLetters(text) {
    var mensaje = "";
    var anterior = "";
    let bandera = true;
    let contador = 0;
    for (var i = 0; i < text.length; i++) {
        if (mensaje != "") {
            anterior = text[i - 1];
            if (anterior != " " && text[i] != " ") {
                mensaje += " ";
            }
        }
        mensaje += text[i];
    }
    let array = mensaje.split(" ");
    while (contador < array.length) {
        if (isNaN(array[contador])) {
            bandera = true;
        } else {
            bandera = false;
        }
        contador++;
    }
    return bandera;
}

function isChecked(arreglo) {
    for (var i = 0; i < 3; i++) {
        if (arreglo[i].checked) {
            return i;
        }
    }
}

function isEqual(posicion) {
    let sech1 = "Ete sech";
    let sech2 = "Sech";
    let sech3 = "Sech luchador";
    switch (posicion) {
        case 0:
            return sech1;
        case 1:
            return sech2;
        case 2:
            return sech3;
        default:
            return "Sech no encontrado";

    }
}

function createAsech(array) {
    let sechs = [];
    for (var i = 0; i < array.length; i++) {
        let generador = isChecked(array[i]);
        sechs[i] = isEqual(generador);
    }
    return sechs;
}

function complete(array) {
    let mensaje = "Sech no encontrado";
    let contador = 0;
    while (contador < array.length) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == mensaje) {
                return false;
            }
            contador++;
        }
    }
    return true;
}

function searchSech(array) {
    let sech1 = "Ete sech";
    let sech2 = "Sech";
    let sech3 = "Sech luchador";
    let sech4 = "Sech mixto";
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === sech1) {
            contador1++;
        } else if (array[i] === sech2) {
            contador2++;
        } else if (array[i] === sech3) {
            contador3++;
        }
    }
    if (contador1 > contador2 && contador1 > contador3) {
        return sech1;
    } else if (contador2 > contador1 && contador2 > contador3) {
        return sech2;
    } else if (contador1 == contador2 && contador1 > contador3) {
        return sech4;
    } else if (contador2 == contador3 && contador2 > contador1) {
        return sech4;
    } else if (contador1 == contador2 && contador2 == contador3) {
        return sech4;
    } else if (contador3 == contador1 && contador3 > contador2) {
        return sech4;
    } else {
        return sech3;
    }
}




formulario.addEventListener("submit", function() {
    var nombre = document.querySelector("#name").value;
    var alerta = document.querySelector("#nombre");
    if (nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre) || !onlyLetters(nombre)) {
        alerta.style.display = "block"
        alert("El nombre no fue llenado correctamente. ");
        return false;
    } else {
        alerta.style.display = "none";
    }

    var apellido = document.querySelector("#lastName").value;
    var alertaApellido = document.querySelector("#apellido");
    if (apellido.trim() == null || apellido.trim().length == 0 || !isNaN(apellido) || !onlyLetters(apellido)) {
        alertaApellido.style.display = "block"
        alert("El apellido no fue llenado correctamente. ");
        return false;
    } else {
        alertaApellido.style.display = "none";

    }

    let music = document.getElementsByName("music");
    let hobby = document.getElementsByName("hobby");
    let drink = document.getElementsByName("drink");
    let situation = document.getElementsByName("situation");
    let type = document.getElementsByName("type");
    let kind = document.getElementsByName("kind");



    let categorias = [music, hobby, drink, situation, type, kind];

    resultadoTest = searchSech(createAsech(categorias));
    console.log(complete(createAsech(categorias)));
    if (!complete(createAsech(categorias))) {
        alert("Asegurese de completar bien el cuestionario. ");
    } else {
        alert("Cuestionario completado, ya puede ver sus resultados! ");
        localStorage.setItem("Nombre", nombre);
        localStorage.setItem("Apellido", apellido);
        localStorage.setItem("Resultado", resultadoTest);
    }


});