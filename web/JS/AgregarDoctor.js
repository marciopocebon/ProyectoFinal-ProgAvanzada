
function mostrarContrasena(){
    event.preventDefault();
    var tipo = document.getElementById("contrasena");
    if(tipo.type == "password"){
    	tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}
function habilitarHospital(value){
    if(value=="0"){
        document.getElementById("hospital").disabled=true;
    }else{
        const url = "Validaciones?tipoValidacion=hospitalLocalidad&localidad="+document.getElementById("localidad").value;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("hospital").innerHTML =this.responseText;  
                document.getElementById("hospital").disabled=false;
            }
        };
        xhttp.open("POST", url, true);
        xhttp.send();
    }
}
function ValidarUsuario(){
    const url = "Validaciones?tipoValidacion=existeUsuario&usuario="+ document.getElementById("usuario").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("error").innerHTML = this.responseText;
            if(this.responseText == ""){
                return true;
            }else{
                return false;
            }        
        }
    };
    xhttp.open("POST", url, true);
    xhttp.send();        
}
function CrearDoctor(){
    var validaciones = 0;
    if(ValidarUsuario()){
        if(!document.getElementById("usuario").value==""){
            ++validaciones;
        }
    }
    if(!document.getElementById("localidad").value=="0"){
        ++validaciones;
    }
    if(!document.getElementById("hospital").value=="0"){
        ++validaciones;
    }
    if(!document.getElementById("especialidad").value=="0"){
        ++validaciones;
    }
    if(!document.getElementById("nombre").value==""){
        ++validaciones;
    }
    if(!document.getElementById("contrasena").value==""){
        ++validaciones;
    }
    if(validaciones!=6){
        alert("Error verifique los campos.");
    }
}

