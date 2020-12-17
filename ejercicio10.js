var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num10'){

  var nombre, edad, meses;
  nombre = prompt('Ingrese nombre:',' ');
  edad=prompt('Indique su Edad:',' ');

  document.write("<p>");
  document.write("Nombre: ",nombre,"<br>");
  document.write("Edad: ",edad, " años");

  if (edad<=1) {
    meses=prompt('Indique sus Meses:',' ');
    document.write(" con: ",meses, " meses");
    document.write("<br>","Usted es BEBE");
  }else if (edad>=2 && edad<12) {
    document.write("<br>","Usted es NIÑO");
  }else if (edad>=12 && edad<18) {
    document.write("<br>","Usted es ADOLESCENTE");
  }else if (edad>=18 && edad<31) {
    document.write("<br>","Usted es JOVEN");
  }else if (edad>=31 && edad<65) {
    document.write("<br>","Usted es ADULTO");
  }else if (edad>=65) {
    document.write("<br>","Usted es ANCIANO");
  }
  document.write("</p>");

}
