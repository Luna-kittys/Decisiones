function calcular(){

    let edadAlumno = parseFloat(document.getElementById("num1").value);
    let promedioAlumno = parseFloat(document.getElementById("num2").value);
    let mensaje = "";

        if(edadAlumno > 18){
            
        if(promedioAlumno >= 9){mensaje = "Recibirá una beca de $2000.";}
    else
        if(promedioAlumno >= 7.5){mensaje = "Recibirá una beca de $1000.";}
    else 
        if(promedioAlumno >= 6){mensaje = "Recibirá una beca de $500.";}
    else
        {mensaje = "Se enviará una carta de invitación para mejorar.";}
  
    }   
    else
        {

        if(promedioAlumno >= 9){
            mensaje = "Recibirá una beca de $3000.";
        }else if(promedioAlumno >= 8){
            mensaje = "Recibirá una beca de $2000.";
        }else if(promedioAlumno >= 6){
            mensaje = "Recibirá una beca de $100.";
        }else{
            mensaje = "Se enviará una carta de invitación para mejorar.";
        }

    }

    document.getElementById("resul").textContent = mensaje;

}