var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num12'){

  var nombre_complet, celula, tip_boleto, destino, zona_fum,
  tex_bolet, tex_destin, precio, precioTOTAL, descuento, recarg;

  nombre_complet = prompt('Ingrese nombre compleo:',' ');
  celula = prompt('Ingrese su cedula:',' ');
  tip_boleto = parseInt(prompt('Indique el tipo de boleto: \n 1. 1ra clase \n 2. 2da clase \n 3. 3ra clase',' '));
  destino = parseInt(prompt('Indique el Destino: \n 1. Europa \n 2. America Norte \n 3. America Sur \n 4. Islas Caribe',' '));
  zona_fum = parseInt(prompt('Indique su zona preferida: \n 1. Fumador \n 2. No fumador',' '));

  switch(tip_boleto){
    case 1:
      tex_bolet="Primera clase";
      switch(destino){
        case 1: precio=2500; tex_destin="Europa"; break;
        case 2: precio=2000; tex_destin="America Norte"; break;
        case 3: precio=1000; tex_destin="America Sur"; break;
        case 4: precio=800; tex_destin="Islas Caribe"; break;
      }
    break;

    case 2:
      tex_bolet="Segunda clase";
      switch(destino){
        case 1: precio=2100; tex_destin="Europa"; break;
        case 2: precio=1700; tex_destin="America Norte"; break;
        case 3: precio=900; tex_destin="America Sur"; break;
        case 4: precio=700; tex_destin="Islas Caribe"; break;
      }
    break;

    case 3:
      tex_bolet="Tercera clase";
      switch(destino){
        case 1: precio=1900; tex_destin="Europa"; break;
        case 2: precio=1400; tex_destin="America Norte"; break;
        case 3: precio=750; tex_destin="America Sur"; break;
        case 4: precio=500; tex_destin="Islas Caribe"; break;
      }
    break;
  }

  document.write("<p>");
  document.write("<div class=DatosImportantes><h1>","Nombre Completo: <br>",nombre_complet,"</h1></div>");

  document.write("<h2>DETALLES DE COMPRA: </h2>");
  document.write("<h2>Boleto: ",tex_bolet,"<br>Destino: ",tex_destin,"</h2>");
  document.write("<h2>Precio normal del boleto: $",precio,"</h2>");
  if(zona_fum==1){
    if(tip_boleto==1){
      descuento=precio*0.1;
      precioTOTAL = precio-(descuento);
      document.write("<h2>FUMADOR con valor del descuento del 10%: - ",descuento,"<h2>");
    }else{
      descuento=precio*0.05;
      precioTOTAL = precio-(descuento);
      document.write("<h2>FUMADOR con valor del descuento del 5%: - ",descuento,"<h2>");
    }
  }else{
    recarg=precio*0.08;
    precioTOTAL = precio+(recarg);
    document.write("<h2>NO FUMADOR con Valor de la recarga del 8%: + ",recarg,"<h2>");
  }

  document.write("<div class=DatosImportantes><h1>","Total a pagar: $",precioTOTAL," pesos</h1></div>");
  document.write("</p>");

}
