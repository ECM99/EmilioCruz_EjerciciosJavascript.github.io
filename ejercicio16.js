//https://mosaic.uoc.edu/ac/le/es/m6/ud7/index.html
var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num16'){

  var nombre, diastrabajo, SalarioDia, HrsExtras, opcJustif, opcJustif2;
  var Sueldo_dias, razon, pagoHrs, diasNOtrabajo, PagoHrsExtras, sueldoBruto;
  nombre = prompt('Ingrese el nombre del trabajador: ');
  SalarioDia = parseInt(prompt('Ingrese el salario por dia: ')); //200
  diastrabajo = parseInt(prompt('Ingrese los dias trabajados: ')); //3
  HrsExtras = parseInt(prompt('Ingrese las horas extras totales: ')); //5

  pagoHrs = SalarioDia/8;
  diasNOtrabajo = 15-diastrabajo;


  document.write('<tr><td class="columnasReferencia">',"Nombre Completo: </td><td class='columnasDatos' colspan='2'>",nombre,'</td></tr>');
  /*document.write('<br>',"Pago por hora: ",pagoHrs);
  document.write('<br>');*/
  document.write('<tr><td class="columnasReferencia">',"Dias trabajados: </td><td class='columnasDatos' colspan='2'>",diastrabajo,' dias</td></tr>');
  document.write('<tr><td class="columnasReferencia">',"Salario al dia: </td><td class='columnasDatos' colspan='2'>$ ",SalarioDia,'</td></tr>');
  document.write('<tr><td class="columnasReferencia">',"Hrs Extras trabajadas: </td><td class='columnasDatos' colspan='2'>",HrsExtras,' Hrs</td></tr>');
  if(diastrabajo<15){
    //document.write('<br>',"Dias NO trabajados: ",diasNOtrabajo);
    opcJustif = parseInt(prompt('Ingrese el tipo de las faltas: \n1. Justificadas \n2.No justificadas'));
    switch (opcJustif) {
      case 1:
        opcJustif2 = parseInt(prompt('Indique tipo de justificación: \n1. Por enfermedad \n2. Personal')); //3
        switch (opcJustif2) {
          case 1:
            razon = 'Razon de las faltas: \nEnfermedad (dias faltantes pagados)';
            Sueldo_dias = 15*SalarioDia;
            break;
          case 2:
            razon = 'Razon de las faltas:\n Personal (dias faltantes pagados pero -50% al salario-dia)';
            Sueldo_dias = (diastrabajo*SalarioDia)+(diasNOtrabajo*(SalarioDia*0.5));
            break;
          default:
        }
        break;
      case 2:
        razon = 'Razon de las faltas:\n Sin razon (dias faltantes NO son pagados)';
        Sueldo_dias = (diastrabajo*SalarioDia);
        break;
      default:
    }
    //document.write('<br>',"Razon de las faltas: ",razon);
  }else {
    Sueldo_dias = diastrabajo*SalarioDia;
    razon = "Quincena Completa"
  }

  document.write('<tr><td class="columnasReferencia" rowspan="2">',"SUELDO por dias laborados: </td><td class='columnasDatos' colspan='2'>",razon,'</td></tr>');
  document.write('<tr><td class="columnasDatos" colspan="2">$ ',Sueldo_dias,'</td></tr>');

  document.write('<tr><td class="columnasReferencia" rowspan="3">',"SUELDO por Horas Extras: </td>");
    if(HrsExtras>9){
      document.write("<td class='columnasDatos' >Paga DOBLE</td><td class='columnasDatos' >Paga TRIPLE</td>");
      document.write('<tr><td class="columnasDatos">9 Hrs</td><td class="columnasDatos">',HrsExtras-9,' Hrs</td></tr>');
      PagoHrsExtras = (9*(pagoHrs*2))+((HrsExtras-9)*(pagoHrs*3));
      document.write('<tr><td class="columnasDatos" colspan="2">$ ',PagoHrsExtras,'</td></tr>');
    }else {
      document.write("<td class='columnasDatos'>Paga DOBLE</td>");
      document.write('<tr><td class="columnasDatos">',HrsExtras,' Hrs</td></tr>');
      PagoHrsExtras = HrsExtras*(pagoHrs*2);
      document.write('<tr><td class="columnasDatos" colspan="2">$ ',PagoHrsExtras,'</td></tr>');
    }
  document.write('</tr>');

  sueldoBruto = Sueldo_dias + PagoHrsExtras;
  document.write('<tr><td class="columnasReferencia">',"SUELDO BRUTO (pago dias laborales mas hrs extras): </td><td class='columnasDatos' colspan='2'>$ ",sueldoBruto,'</td></tr>');


}
