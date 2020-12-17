var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num9'){

  var nombre, edad;
  nombre = prompt('Ingrese nombre:',' ');
  edad=prompt('Indique su Edad:',' ');

  document.write("<p>");
  document.write("Nombre: ",nombre,"<br>");
  document.write("Edad: ",edad, " años");

  if (edad<18) {
    document.write("<br>","Usted es MENOR DE EDAD");
  }else if (edad>=18 && edad<65) {
    document.write("<br>","Usted es MAYOR DE EDAD");
  }else if (edad>=65) {
    document.write("<br>","Usted es de TERCERA DE EDAD");
  }
  document.write("</p>");

}
