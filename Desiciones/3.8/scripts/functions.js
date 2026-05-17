function calcular() {

    let salario = parseFloat(document.getElementById("num1").value);
    let tiempo = parseFloat(document.getElementById("num2").value);

    let bonoTiempo = 0;
    let bonoSalario = 0;
    let bonoMayor = 0;

       if (tiempo > 2 && tiempo < 5) {bonoTiempo = salario * 0.20;} 
    else 
        if (tiempo >= 5) {bonoTiempo = salario * 0.30;}
        if (salario < 1000) {bonoSalario = salario * 0.25;} 
    else 
        if (salario <= 3500) {bonoSalario = salario * 0.15;} 
    else 
        {bonoSalario = salario * 0.10;}
        
        if (bonoTiempo > bonoSalario) {bonoMayor = bonoTiempo;} 
    else 
        {bonoMayor = bonoSalario;}

    document.getElementById("resul").textContent ="El bono asignado es de $" + bonoMayor;

}