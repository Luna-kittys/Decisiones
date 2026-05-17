function calcular(){

    let costo = parseFloat(document.getElementById("num1").value);
    let rebaja = 0;

    if(costo >= 200){rebaja = costo * 0.15;}
else 
    if(costo > 100 && costo < 200){rebaja = costo * 0.12;}
else
    {rebaja = costo * 0.10;}

    let precioFinal = costo - rebaja;

    document.getElementById("resul").textContent = "Descuento: $" + rebaja + " | Total: $" + precioFinal;

}