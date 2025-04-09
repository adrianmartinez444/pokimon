/*function loguear() {
    let username = document.getElementById('username').value
    let password = document.getElementById('clave').value

    let savepassword = JSON.parse(localStorage.getItem("user"))

    if (savepassword && localStorage[3] === password ) {
        alert('No tienes una cuenta registrada, ¿Quieres crear una?')
        window.localStorage.href = "../vistas/registro.html"
    
    } else {
        alert('Usuario valido');
        window.location.href = "../vistas/entrenador.html"

    }

}
*/

function Loguear() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('clave').value;

    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    console.log(password)

    
    if (user && username == user[0] && password === user[5]) {
        alert('Usuario registrado');
        localStorage.setItem('Usuario Activo', username);
        window.location.href = '../vistas/pokimones.html';
    } else{
        alert('Usuario o contraseña incorrectos');
        window.location.href = '../vistas/registrar.html';
    }
}