var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num6'){

  var nombre, unid1, unid2, unid3, unid4, promed;
  nombre = prompt('Ingrese nombre:',' ');
  unid1=parseInt(prompt('Calificacion unidad 1:',' '));
  unid2=parseInt(prompt('Calificacion unidad 2:',' '));
  unid3=parseInt(prompt('Calificacion unidad 3:',' '));
  unid4=parseInt(prompt('Calificacion unidad 4:',' '));
  promed= (unid1*0.2)+(unid2*0.15)+(unid3*0.3)+(unid4*0.35);

  document.write("<p>");
  document.write("Nombre: ",nombre);
  document.write("<br>");
  document.write("Calificacion unidad 1: ",unid1);
  document.write("   Porcentaje: ",unid1*0.2," %");
  document.write("<br>");
  document.write("Calificacion unidad 2: ",unid2);
  document.write("   Porcentaje: ",unid2*0.15," %");
  document.write("<br>");
  document.write("Calificacion unidad 3: ",unid3);
  document.write("   Porcentaje: ",unid3*0.3," %");
  document.write("<br>");
  document.write("Calificacion unidad 4: ",unid4);
  document.write("   Porcentaje: ",unid4*0.35," %");
  document.write("<br>");
  document.write("Promedio: ",promed," %");
  document.write("</p>");

}
