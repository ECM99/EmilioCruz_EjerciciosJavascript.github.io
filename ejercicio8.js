var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num8'){

  var nombre, tiemp_agua;
  nombre = prompt('Ingrese nombre:',' ');
  tiemp_agua=prompt('Indique su tiempo record sumergido bajo agua (segundos):',' ');

  document.write("<p>");
  document.write("Nombre: ",nombre,"<br>");
  document.write("Duración: ",tiemp_agua, " segundos");

  if (tiemp_agua==60) {
    document.write("<br>","En base a su duracion Usted es NORMAL");
  }else if (tiemp_agua<60) {
    document.write("<br>","En base a su duracion Usted podria padecer ASMA");
  }else{
    document.write("<br>","En base a su duracion Usted es similar a ACUAMAN");
  }
  document.write("</p>");

}
