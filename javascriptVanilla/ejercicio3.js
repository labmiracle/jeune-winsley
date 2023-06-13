/*
Cada día una planta crece en metros según suvelocidadCrecimiento. Cada noche, dichaplanta decrece en metros en base a 
suvelocidadDecrecimientodebido a la falta de sol.Cuando nace, mide exactamente0metros. Queremos saber los días que 
tardará una plantaen alcanzar ciertaalturaDeseada. Crear una función que recibavelocidadCrecimiento,
velocidadDecrecimientoyalturaDeseadacomo números enteros positivos y devuelvael número de días que tardará la 
planta en medir laalturaDeseada.function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, 
alturaDeseada) {}
*/

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let alturaActual = 0;
    let dias = 0;
  
    while (alturaActual < alturaDeseada) {
      alturaActual += velocidadCrecimiento;
      dias++;
  
      if (alturaActual >= alturaDeseada) {
        break;
      }
  
      alturaActual -= velocidadDecrecimiento;
    }
  
    return dias;
  }

    console.log(calcularDiasCrecimiento(100,10,910));