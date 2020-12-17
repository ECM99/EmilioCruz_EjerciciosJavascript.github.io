var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num3'){

  var nombre, edad, peso, altura;
  nombre='Emilio';
  edad=21;
  peso=75;
  altura=1.70;
  document.write("<h1>Nombre: ", nombre, '<br>', "Edad: ", edad, '<br>', "Altura: ", altura, '<br>', "Peso: ", peso);
  document.write('</h1>');
  document.write('<br>');
  document.write("<h2>Nombre: ", nombre);
  document.write('<br>');
  document.write("Edad: ", edad);
  document.write('<br>');
  document.write("Altura: ", altura, ' mts');
  document.write('<br>');
  document.write("Peso: ", peso, ' kgs');
  document.write('</h2>');

}
