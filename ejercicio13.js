var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num13'){

  var nombre, num, i;
  nombre = prompt('¿Cual es tu nombre? ');
  num = parseInt(prompt('¿cantidad de repeticiones? '));

  document.write("<p>");
  for (i=1; i<=num; i++) {
    document.write(nombre," <br> ");
  }
  document.write("</p>");

}
