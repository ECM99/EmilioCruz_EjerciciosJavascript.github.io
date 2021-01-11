//https://mosaic.uoc.edu/ac/le/es/m6/ud7/index.html
var url = window.location.href;
var div = url.substring(url.lastIndexOf('#') + 1);
if(div=='num17'){

  var nombre, apellidoP, apellidoM, salarioDia, diasTrabajo, añoIngreso;
  var sueldoBruto,
      faltasJust, razonDiasTrabajo,
      eficienciaPreg, razonEficiencia, eficienciaMonto,
      puntAsisPreg, razonPuntAsis, puntAsisMonto,
      aguinaldoPreg, razonAguinaldo, aguinaldoMonto, diasTrabajoAño,
      percepcionTOTAL,
      isr, sceav, siv, ssc, ss, fovissste, deduccionTOTAL,
      sueldoLiquido;


  nombre = prompt('Ingrese el nombre del trabajador: ');
  apellidoP = prompt('Ingrese el Apellido Paterno del trabajador: ');
  apellidoM = prompt('Ingrese el Apellido Materno del trabajador: ');
  salarioDia = parseInt(prompt('Ingrese el salario por dia: '));
  diasTrabajo = parseInt(prompt('Ingrese los dias trabajados en la quincena: '));
    if (diasTrabajo == 15) {
      razonDiasTrabajo = "Quincena Completa";
      sueldoBruto = 15 * salarioDia;
    }else if (diasTrabajo < 15){
      faltasJust = parseInt(prompt('¿Sus faltas son justificadas? \n 1.Si \n 2.No'));
      switch (faltasJust) {
        case 1:
          razonDiasTrabajo = "Quincena incompleta pero con faltas Justificadas";
          sueldoBruto = 15 * salarioDia;
        break;
        case 2:
          razonDiasTrabajo = "Quincena incompleta y faltas NO Justificadas";
          sueldoBruto = diasTrabajo * salarioDia;
        break;
      }
    }
  añoIngreso = parseInt(prompt('Ingrese el año que ingreso a trabajar: '));

  document.write("<tr><td>","Nombre Completo: </td><td colspan='2' class='columnasDatos'>",nombre," ",apellidoP," ",apellidoM,"</td></tr>");
  document.write("<tr><td>","Salario al dia: </td><td colspan='2' class='columnasDatos'>$ ",salarioDia,"</td></tr>");
  document.write("<tr><td>","Dias trabajados: </td><td colspan='2' class='columnasDatos'>",diasTrabajo,"</td></tr>");
    //PERCEPCIONES
  document.write("<tr><td rowspan='9' class='columnasDatos'>","PERCEPCIONES</td><td rowspan='2' class='columnasResalto'> Sueldo Bruto</td><td class='columnasDatos'>",razonDiasTrabajo,"</td></tr>");
  document.write("<tr><td class='columnasResalto'>",sueldoBruto,"</td></tr>");
    eficienciaPreg = parseInt(prompt('¿Fue eficiente laboralmente? \n 1.Si \n 2.No'));
    switch (eficienciaPreg) {
      case 1:
          razonEficiencia = "SI aplica(+0.055%)";
          eficienciaMonto = sueldoBruto * 0.00055;
      break;
      case 2:
          razonEficiencia = "NO aplica";
          eficienciaMonto = 0;
      break;
    }
  document.write("<tr><td rowspan='2'> Eficiencia Laboral </td><td class='columnasDatos'>",razonEficiencia,"</td></tr>");
  document.write("<tr><td class='columnasDatos'>$ ",eficienciaMonto,"</td></tr>");
    puntAsisPreg = parseInt(prompt('¿Cumplio Puntualidad y asistencia? \n 1.Si \n 2.No'));
    switch (puntAsisPreg) {
      case 1:
          razonPuntAsis = "SI aplica(+62%)";
          puntAsisMonto = sueldoBruto * 0.62;
      break;
      case 2:
          razonPuntAsis = "NO aplica";
          puntAsisMonto = 0;
      break;
    }
  document.write("<tr><td rowspan='2'> Puntualidad y Asistencia </td><td class='columnasDatos'>",razonPuntAsis,"</td></tr>");
  document.write("<tr><td class='columnasDatos'>$ ",puntAsisMonto,"</td></tr>");
    aguinaldoPreg = parseInt(prompt('¿Laboró el año completo? \n 1.Si \n 2.No'));
    switch (aguinaldoPreg) {
      case 1:
          diasTrabajoAño = 365;
          razonAguinaldo = "Año laboral completo";
          aguinaldoMonto = 15 * salarioDia;
      break;
      case 2:
            diasTrabajoAño = parseInt(prompt('Ingrese los dias trabajados en el año: '));
          razonAguinaldo = "Año laboral incompleto";
          aguinaldoMonto = diasTrabajoAño * ((15 * salarioDia)/365);
      break;
    }
  document.write("<tr><td rowspan='2'> Aguinaldo </td><td class='columnasDatos'>",razonAguinaldo," (",diasTrabajoAño," dias)</td></tr>");
  document.write("<tr><td class='columnasDatos'> + $ ",aguinaldoMonto,"</td></tr>");
    percepcionTOTAL = sueldoBruto + eficienciaMonto + puntAsisMonto + aguinaldoMonto;
  document.write("<tr><td class='columnasResalto'> TOTAL </td><td class='columnasResalto'>$",percepcionTOTAL,"</td></tr>");

    //DEDUCCIONES
    isr = sueldoBruto * 0.16 ;
    sceav = sueldoBruto * 0.077 ;
    siv = sueldoBruto * 0.0078 ;
    ssc = sueldoBruto * 0.0062 ;
    ss = sueldoBruto * 0.042 ;
    fovissste = sueldoBruto * 0.3 ;
    deduccionTOTAL = isr + sceav + siv + ssc + ss + fovissste;
  document.write("<tr><td rowspan='7' class='columnasDatos'>","DEDUCCIONES</td><td>ISR (16%)</td><td class='columnasDatos'>",isr,"</td></tr>");
  document.write("<tr><td>SCEAV (7.7%)</td><td class='columnasDatos'>",sceav,"</td></tr>");
  document.write("<tr><td>SIV (0.78%)</td><td class='columnasDatos'>",siv,"</td></tr>");
  document.write("<tr><td>SSC (0.62%)</td><td class='columnasDatos'>",ssc,"</td></tr>");
  document.write("<tr><td>SS (4.2%)</td><td class='columnasDatos'>",ss,"</td></tr>");
  document.write("<tr><td>FOVISSTE (30%)</td><td class='columnasDatos'>",fovissste,"</td></tr>");
  document.write("<tr><td class='columnasResalto'> TOTAL </td><td class='columnasResalto'>$",deduccionTOTAL,"</td></tr>");
    //SUELDO LIQUIDO
  sueldoLiquido = percepcionTOTAL - deduccionTOTAL;
  document.write("<tr><td class='columnasResalto'> SUELDO LIQUIDO </td><td colspan = '2' class='columnasResalto'>$",sueldoLiquido,"</td></tr>");

}
