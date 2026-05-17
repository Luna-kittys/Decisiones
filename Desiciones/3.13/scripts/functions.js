function calcular(){

    let cantidad = parseFloat(document.getElementById("num1").value);
    let costoAlumno = 0;

    if(cantidad > 100){costoAlumno = 20;}
 else 
    if(cantidad >= 50){costoAlumno = 35;}
 else 
    if(cantidad >= 20){costoAlumno = 40;}
 else
    {costoAlumno = 70;}

    let totalViaje = cantidad * costoAlumno;

    document.getElementById("resul").textContent = "Cada alumno pagará $" + costoAlumno + " y el total será $" + totalViaje;

}