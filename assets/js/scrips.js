
function validar(){
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var usuario= document.getElementById("usuario");
    var pass = document.getElementById("pass");
    var telefono = document.getElementById("telefono");

    if (
        nombre.value === "" ||
        apellidos.value === "" ||
        correo.value === "" ||
        usuario.value === "" ||
        pass.value === "" ||
        telefono.value === ""
   
    )   {
            alert("Todos los campos son obligatorios");
            return false;
        }   else if (nombre.value.length>30){
            alert("El nombre es muy largo");
            return false;
        }   else if (apellidos.value.length>80){
            alert("Apellidos es muy largo");
            return false;
        }   else if (correo.value.length>100){
            alert("Correo es muy largo");
            return false;
        }   else if (usuario.value.length>20){
            alert("Usuario es muy largo");
            return false;
        }   else if (telefono.value.length>15){
            alert("Teléfono es muy largo");
            return false;
        }   else if (isNaN(telefono.value)){
            alert ("Teléfono debe contener sólo números");
            return false;
        }   else {
            alert (nombre.value + ", los datos fueron ingresados correctamente.")
        }
}

