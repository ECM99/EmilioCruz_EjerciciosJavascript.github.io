var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num14'){

  document.write("<p>");
  var num, i;
  num = parseInt(prompt('Indique el numero a multiplicar: ',' '));
  for (i=1; i<=10; i++) {
    document.write(num," x ",i," = ",(num*i),"<br>" );
  }
  document.write("</p>");

}
