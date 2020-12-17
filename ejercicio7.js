var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num7'){

  var nombre, unid1, unid2, unid3, unid4, unid5, promed;
  nombre = prompt('Ingrese nombre:',' ');
  unid1=parseInt(prompt('Calificacion unidad 1:',' '));
  unid2=parseInt(prompt('Calificacion unidad 2:',' '));
  unid3=parseInt(prompt('Calificacion unidad 3:',' '));
  unid4=parseInt(prompt('Calificacion unidad 4:',' '));
  unid5=parseInt(prompt('Calificacion unidad 5:',' '));

  promed= (unid1+unid2+unid3+unid4+unid5)/5;

  document.write("<p>");
  if (promed>=70) {
    document.write(nombre,"<br>");
    document.write("Usted acredito la unidad");
    document.write("<br>","Con un promedio de ",promed);
  }else {
    document.write(nombre,"<br>");
    document.write("Usted Reprobo la unidad");
    document.write("<br>","Por un promedio de ",promed);
  }
  document.write("</p>");

}
