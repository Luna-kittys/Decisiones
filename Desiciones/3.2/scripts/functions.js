function calcular() {

    let horasTrabajadas = parseFloat(document.getElementById("num1").value);
    let pagoHora = parseFloat(document.getElementById("num2").value);
    let total = 0;
    let horasExtra = horasTrabajadas - 40;
    
        if (horasTrabajadas > 40) {total = (40 * pagoHora) + (horasExtra * pagoHora * 2);} 
    
    else 
    
        {total = horasTrabajadas * pagoHoras}

    document.getElementById("resul").textContent = "El sueldo semanal es de $" + total;

}