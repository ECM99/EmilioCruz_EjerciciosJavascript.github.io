var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num15'){

  var cant, i, num;
  var pares=0, impares=0, suma=0, promedio;
  cant = parseInt(prompt('Indique la cantidad de numeros a analizar: ',' '));
  for (i=1; i<=cant; i++) {
    num = parseInt(prompt('Ingrese el numero: '));

    if(num%2==0){
      pares++;
    }else{
      impares++;
    }

    suma=suma+num;

    document.write("<p>");
    document.write(num,"<br>");
  }
  promedio=suma/cant;
  document.write("<br>suma: ",suma);
  document.write("<br>Cantidad de pares: ",pares);
  document.write("<br>Cantidad de impares: ",impares);
  document.write("<br>Promedio: ",promedio);
  document.write("</p>");

}
