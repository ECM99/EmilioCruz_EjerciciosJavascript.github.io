var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num4'){

  var nombre, edad, altura, dir, peso, telf, fechaNA;

  nombre=prompt('Ingresa tu nombre:',' ');
  edad=prompt('Ingresa tu edad:',' ');
  altura=prompt('Ingresa tu altura:',' ');
  dir=prompt('Ingresa tu Dirección:',' ');
  peso=prompt('Ingresa tu peso:',' ');
  telf=prompt('Ingresa tu teléfono:',' ');
  fechaNA=prompt('Ingresa tu Fecha de nacimiento:',' ');

  document.write("<p>");
  document.write("Nombre: ",nombre);
  document.write("<br>");
  document.write("Edad: ",edad);
  document.write("<br>");
  document.write("Altura: ",altura);
  document.write("<br>");
  document.write("Dirección: ",dir);
  document.write("<br>");
  document.write("Peso: ",peso);
  document.write("<br>");
  document.write("Telefono: ",telf);
  document.write("<br>");
  document.write("Fecha de nacimiento: ",fechaNA);
  document.write("</p>");
  
}
