var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num5'){

  var cant, iva, total;

  cant=parseInt(prompt('Ingresa la cantidad:',' '));
  iva= parseInt(cant*0.16);
  total=cant+iva;

  document.write("<p>");
  document.write("Cantidad: ",cant);
  document.write("<br>");
  document.write("IVA (16%): ",iva);
  document.write("<br>");
  document.write("TOTAL: ",total);
  document.write("</p>");

}
