function Registrar(){
    let nombre = document.getElementById("nombre").value;

    if(nombre.length <3) {
        alert("El nombre debe tener como minimo 3 caracteres.");
    return false;
    
    }
    
    let apellido = document.getElementById("apellido").value
    
    if(apellido.length <3) {
        alert("El apellido debe tenere como minimo 3 caracteres.");
    return false;
    }

    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        alert("El correo electronico no es valido.");
        return false;
    }
    

    let telefono = document.getElementById("telefono").value;
    let telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)){
        alert("El numero debe tener 10 digitos minimo.")
        return false;
    }

    let direccion = document.getElementById('direccion').value;
    if (direccion.length < 5){
        alert("La direccion debe tener como minimo 5 caracteristicas")
        return false;
    }


    let contrasena = document.getElementById('contrasena').value;
    let recontrasena = document.getElementById('contrasenaConfirm').value;
    if (contrasena !== recontrasena){
        alert("Las contraseñas no coinciden")
        return false;
    }

    let array = [
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        contrasena
    ]

    localStorage.setItem("user", JSON.stringify(array));
    alert("Usuario registrado correctamente")
    window.location.href = "../vistas/pokimones.html"

}