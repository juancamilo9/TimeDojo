function mostrarAlerta(element) {
    var nombreCiudad = document.querySelector(".san-jose h2");
    var ciudad = element.textContent;
    alert("Loading weather report..." + ciudad);

    nombreCiudad.innerText = ciudad;
}

function ocultarMensaje() {
    var mensaje = document.querySelector(".alerta-cookie");
    mensaje.remove();
}

function convertir(){
    var conversion = document.querySelector("#temperatura").value;
    console.log(conversion);
    var temperaturaMaxima = document.getElementsByClassName("temperatura-maxima");
    var temperaturaMinima = document.getElementsByClassName("temperatura-minima");
    obtenerTemperaturaMax(conversion,temperaturaMaxima);
    obtenerTemperaturaMin(conversion,temperaturaMinima);
}

function obtenerTemperaturaMax(conversion,temperatura){
    if(conversion == "F"){
        for (let i = 0; i < temperatura.length; i++) {
            const posicion = parseInt(temperatura[i].textContent);
            resultado = (posicion*1.8)+32;
            console.log(resultado);
            temperatura[i].textContent = resultado.toFixed(0) + "°"
        }
    }else if(conversion == "C"){
        for (let i = 0; i < temperatura.length; i++) {
            const posicion = parseInt(temperatura[i].textContent);
            resultado = (posicion-32)*0.5556;
            console.log(resultado);
            temperatura[i].textContent = resultado.toFixed(0) + "°"
        }
    }
}

function obtenerTemperaturaMin(conversion,temperatura){
    if(conversion == "F"){
        for (let i = 0; i < temperatura.length; i++) {
            const posicion = parseInt(temperatura[i].textContent);
            resultado = (posicion*1.8)+32;
            console.log(resultado);
            temperatura[i].textContent = resultado.toFixed(0) + "°"
        }
    }else if(conversion == "C"){
        for (let i = 0; i < temperatura.length; i++) {
            const posicion = parseInt(temperatura[i].textContent);
            resultado = (posicion-32)*0.5556;
            console.log(resultado);
            temperatura[i].textContent = resultado.toFixed(0) + "°"
        }
    }
}