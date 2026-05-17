function calcular(){

    let dinero = parseFloat(document.getElementById("num1").value);
    let costoKm = parseFloat(document.getElementById("num2").value);
    let viajeMexico = 750 * 2 * costoKm;
    let viajePV = 800 * 2 * costoKm;
    let viajeAcapulco = 1200 * 2 * costoKm;
    let viajeCancun = 1800 * 2 * costoKm;
    let destino = "";

         if(dinero >= viajeCancun){destino = "Cancún";}
    else 
        if(dinero >= viajeAcapulco){destino = "Acapulco";}
    else 
        if(dinero >= viajePV){destino = "Puerto Vallarta";}
    else 
        if(dinero >= viajeMexico){destino = "México";}
    else
        {destino = "Debe quedarse en casa";}

    document.getElementById("resul").textContent = "Puede viajar a: " + destino;

}