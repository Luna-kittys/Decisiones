function calcular(){

    let tipoPoliza = document.getElementById("num1").value.toUpperCase();
    let tomaAlcohol = parseFloat(document.getElementById("num2").value);
    let usaLentes = parseFloat(document.getElementById("num3").value);
    let tieneEnfermedad = parseFloat(document.getElementById("num4").value);
    let edadConductor = parseFloat(document.getElementById("num5").value);

    let costoBase = 0;
    let recargos = 0;

       if(tipoPoliza == "A"){costoBase = 1200;}
    else
        {costoBase = 950;}

       if(tomaAlcohol == 1){recargos = recargos + (costoBase * 0.10);}
       
       if(usaLentes == 1){recargos = recargos + (costoBase * 0.05);}
       
       if(tieneEnfermedad == 1){recargos = recargos + (costoBase * 0.05);}
       
       if(edadConductor > 40){recargos = recargos + (costoBase * 0.20);}
    else
        {recargos = recargos + (costoBase * 0.10);}

    let precioTotal = costoBase + recargos;

    document.getElementById("resul").textContent = "El costo total de la poliza es" + precioTotal;

}