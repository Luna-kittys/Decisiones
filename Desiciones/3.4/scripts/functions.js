function calcular(){

    let tiempo = parseFloat(document.getElementById("num1").value);
    let importe = 0;

    if(tiempo <= 2){importe = tiempo * 5;}
 else 
    if(tiempo <= 5){importe = 10 + ((tiempo - 2) * 4);}
 else 
    if(tiempo <= 10){importe = 22 + ((tiempo - 5) * 3);}
 else
    {importe = 37 + ((tiempo - 10) * 2);}

    document.getElementById("resul").textContent = "Debe pagar" + importe;

}