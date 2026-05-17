function calcular(){

    let antiguedad = parseFloat(document.getElementById("num1").value);
    let bono = 0;

         if(antiguedad > 5){bono = 1000;}
    else
        {bono = antiguedad * 100;}

    document.getElementById("resul").textContent = "El bono correspondiente es " + bono;

}