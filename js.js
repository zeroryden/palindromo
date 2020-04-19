function check() {

    var palabra = document.getElementById("word").value;
    var palabraMinuscula = palabra.toLowerCase();
    var largoPalabra = palabraMinuscula.length;
    var sinEspacios = "";
    for (let i = 0; i < largoPalabra; i++) {
        if (palabraMinuscula[i] != " ") {
            sinEspacios += palabraMinuscula[i];
        }
    }
    var palInvertida = sinEspacios.split("").reverse().join("");
    var respuesta = document.getElementById("answer");

    if (palabraMinuscula == "") {
        respuesta.innerHTML = "Porfavor ingresa una palabra!";
    } else if (palabraMinuscula == " ") {
        respuesta.innerHTML = "Porfavor ingresa una palabra!";
    } else if (sinEspacios == palInvertida) {
        respuesta.innerHTML = '<i>"' + palabra + '"</i>' + "<br>SI! Es Palíndromo!";
    } else {
        respuesta.innerHTML = '<i>"' + palabra + '"</i>' + "<br>Nop, no es Palíndromo!";
    }
}