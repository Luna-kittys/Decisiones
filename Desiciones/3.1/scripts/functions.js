function calcular() {

    let anios = parseFloat(document.getElementById("num1").value);
    let mensaje = "";

    if (anios >= 18) {mensaje = "Puede votar en las proximas elecciones.";}
  else 
      
    { mensaje = "No tiene la edad suficiente para votar.";}

    document.getElementById("resul").textContent = mensaje;

}