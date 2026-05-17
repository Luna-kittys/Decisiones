function calcular(){

    let horas = parseFloat(document.getElementById("num1").value);
    let tarifa = parseFloat(document.getElementById("num2").value);
    let sueldo = 0;

       if(horas > 50){document.getElementById("resul").textContent = "No se permite trabajar más de 50 horas.";}
    
    else 
        if(horas <= 40){sueldo = horas * tarifa; document.getElementById("resul").textContent = "El sueldo semanal es $" + sueldo; }
    else 
        if(horas <= 45){sueldo = (40 * tarifa) + ((horas - 40) * tarifa * 2); document.getElementById("resul").textContent = "El sueldo semanal es $" + sueldo;}
    else
        {sueldo = (40 * tarifa) + (5 * tarifa * 2) + ((horas - 45) * tarifa * 3); document.getElementById("resul").textContent = "El sueldo semanal es $" + sueldo;}

}