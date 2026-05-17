function calcular(){

    let presupuesto = parseFloat(document.getElementById("num1").value);
    let opcion = "";
        
        if(presupuesto <= 10){opcion = "Puede comprar una tarjeta.";}
    else 
        if(presupuesto <= 100){opcion = "Puede comprar chocolates.";}
    else 
        if(presupuesto <= 250){opcion = "Puede comprar flores.";}
    else
        {opcion = "Puede comprar un anillo.";}

    document.getElementById("resul").textContent = opcion;

}