function calcular(){

    let primera = parseFloat(document.getElementById("num1").value);
    let segunda = parseFloat(document.getElementById("num2").value);
    let tercera = parseFloat(document.getElementById("num3").value);

    let menor = primera;

    if(segunda < menor){menor = segunda;}
    if(tercera < menor){menor = tercera;}

    document.getElementById("resul").textContent = "La edad menor es " + menor + " años.";

}