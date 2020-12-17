var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num11'){

  var opc, num1, num2, ope, resultado;

  opc = parseInt(prompt('Seleccione la accion que desee realizar: \n1.suma \n2.resta \n3.multiplicacion \n4. division'));
  num1 = parseInt(prompt('Ingrese Numero 1: '));
  num2 = parseInt(prompt('Ingrese Numero 2: '));

  document.write("<p>");
  switch (opc) {
    case 1:
      resultado=num1+num2;
      ope="suma";
      break;
    case 2:
      if (num1>num2) {
        resultado=num1-num2;
      }else {
        resultado=num2-num1;
      }
      ope="resta";
      break;
    case 3:
      resultado=num1*num2;
      ope="multiplicacion";
      break;
    case 4:
      if (num1>num2) {
        resultado=num1/num2;
      }else {
        resultado=num2/num1;
      }
      ope="division";
      break;
    default:document.write("Esta opcion no esta disponible <br>");

  }
  document.write("El resultado de la ",ope," es: ",resultado,"<br>");
  document.write("</p>");

}
