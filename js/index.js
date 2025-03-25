function Loguear() {
    let username = document.getElementById("username").value
    console.log(username);

    let password = document.getElementById("password").value
    console.log(password);

    if (username == "Fredy" && password == "123456789") {
        alert("Bienvenido")
    }else {
        alert("Usuario o contraseña incorrectos")
    }	
    
    
}