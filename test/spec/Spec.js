/* TO DO - list
*
*   velocidad de respuesta, acierto o fallo,
*
*      Si acierto pregunta en menos de 2 segundos - sumo 2 puntos
*          (0 puntos, pregunta correcta, 1 segundo) -> 2 puntos
*          (1 punto, correcta, 1 segundo) -> 3 puntos
*      Si fallo pregunta en mas de 10 segundos - resto 2 puntos
            (2 puntos, incorrecta, 11 segundos) -> 0 puntos
            (4 puntos, incorrecta, 11 segundos) -> 2 puntos
*      Si acierto pregunta entre 2 y 10 segundos - sumo 1 punto
            (1 punto, correcta, 5 segundos) -> 2 puntos
*      Si acierto y tardo mas de 10 segundos - 0 puntos
            (1 punto, correcta, 11 segundos) -> 0 puntos
*      Si fallo antes de 10 segundos - resto 1 punto
            (1 punto, incorrecta, 5 segundos) -> 0 puntos
*      No se puede pasar sin responder
*      Si en 20 segundos no has respondido , pasa a siguiente pregunta y pierdes 3 punto
*           (3 puntos, no contesta, 21 segundos) -> 0 puntos
*
* */


describe('calculo de marcador si es correcta', function () {
  function recalcularMarcadorAcertando(marcador, tiempo) {
    if (tiempo <= 2) {
      return marcador + 2;
    }
    else if (tiempo <= 10) {
      return marcador + 1;
    }
    else if (tiempo > 10) {
      return marcador;
    }
  }
  

  it("suma mas puntos si acierta muy rapido", function () {
    expect(recalcularMarcadorAcertando(0, 1)).toBe(2);
    expect(recalcularMarcadorAcertando(2, 1)).toBe(4);
  });

  it("suma 1 punto si acierta entre 2 y 10 segundos", function () {
    expect(recalcularMarcadorAcertando(0, 3)).toBe(1);
    expect(recalcularMarcadorAcertando(0, 11)).not.toBe(1);
  });

  it("no suma puntos si acierta en más de 10 segundos", function () {
    expect(recalcularMarcadorAcertando(0, 11)).toBe(0);
  });
  
});

describe('calculo de marcador si es incorrecta', function () {
  function recalcularMarcadorFallando(marcador, tiempo) {
    if (tiempo <= 10) {
      return marcador - 1;
    }
    if (tiempo <= 20) {
      return marcador - 2;
    }
    else if (tiempo > 20) {
      return marcador - 3;
    }
  }
  // function resetCuandoNoContesta (puntos, tiempo){
  //   if (tiempo > 20) {
  //     return puntos -3;
  //   }
  // }

  it("resta menos puntos si fallo rápido", function () {
    expect(recalcularMarcadorFallando(1, 5)).toBe(0);
    expect(recalcularMarcadorFallando(1, 10)).toBe(0);
  });

  it("resta más puntos si fallo en más de 10 segundos", function () {
    expect(recalcularMarcadorFallando(2, 11)).toBe(0);
    expect(recalcularMarcadorFallando(4, 11)).toBe(2);
  });

  it("resta más puntos si no contesto en 20 segundos", function () {
    // expect(resetCuandoNoContesta(3, 21)).toBe(0);
    expect(recalcularMarcadorFallando(3, 21)).toBe(0);
  });
});
