function validar(){
    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("clave").value;

    if (usuario=="museo" && contraseña=="123") {
        window.location.href="segundainterfaz.html";
    }else {
        alert("Contraseña incorrecta");
    }

}