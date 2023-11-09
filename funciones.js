


//esta funcion lleva a la pag home con el boton Login//
const btnLogin = document.querySelector("[data-btn-login");

btnLogin.addEventListener("click", function() {
    window.location.href = "home.html";
})

//esta funcion lleva a la seccion consola con el boton Ver Consola//
const VerConsola = document.querySelector ("[data-btn-consola]");

VerConsola.addEventListener("click", function() {
    window.location.href = "#consola";
} )

//esta funcion lleva valida que los campos del input no esten vacios //
const btnenviar = document.querySelector("[data-enviar");

btnenviar.addEventListener ("click", function(evento){
    var mombre = document.getElementsByClassName ("dato__nombre").value; //lo llamo por la clase//
    var mensaje = document.getElementsByClassName("dato__mensaje").value;

    if (nombre === "" || mensaje === ""){
        evento.preventDefault();
        alert("por favor complete los campos para enviar");
    }
})
// pag de login ...esta funcion lleva valida que los campos del input no esten vacios //
const btnentrar = document.querySelector("[data-btn-entrar");

btnentrar.addEventListener ("click", function(evento){
    var mail = document.getElementsByClassName ("dato__email").value; //lo llamo por la clase//
    var contraseña = document.getElementsByClassName("dato__contraseña").value;

    if (mail === "" || contraseña === ""){
        evento.preventDefault();
        alert("por favor complete los campos para enviar");
    }
})

