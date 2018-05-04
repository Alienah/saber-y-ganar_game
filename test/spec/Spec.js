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


describe('calculo de marcador', function () {
  function recalcularMarcador(puntos, esCorrecta, tiempo) {
    if (esCorrecta && tiempo <= 2) {
      return puntos + 2;
    }
    else if ((esCorrecta && tiempo > 2) && (esCorrecta && tiempo <= 10)) {
      return puntos + 1;
    }
    else if (esCorrecta && tiempo > 10) {
      return puntos;
    }
    else if (!esCorrecta && tiempo > 10) {
      return puntos - 2;
    }
    else if (!esCorrecta && tiempo <= 10) {
      return puntos -1;
    }
  }

  it("suma mas puntos si acierta muy rapido", function () {
    expect(recalcularMarcador(0, true, 1)).toBe(2);
    expect(recalcularMarcador(2, true, 1)).toBe(4);
  });

  it("suma 1 punto si acierta entre 2 y 10 segundos", function () {
    expect(recalcularMarcador(0, true, 3)).toBe(1);
    expect(recalcularMarcador(0, true, 11)).not.toBe(1);
  });

  it("no suma puntos si acierta en más de 10 segundos", function () {
    expect(recalcularMarcador(0, true, 11)).toBe(0);
  });

  it("resta más puntos si fallo en más de 10 segundos", function () {
    expect(recalcularMarcador(2, false, 11)).toBe(0);
    expect(recalcularMarcador(4, false, 11)).toBe(2);
  });

  it("resta menos puntos si fallo en menos de 10 segundos", function () {
    expect(recalcularMarcador(1, false, 5)).toBe(0);
    expect(recalcularMarcador(1, false, 10)).toBe(0);
  });

  it("resta más puntos si no contesto en 20 segundos", function () {
    expect(recalcularMarcador(3, null, 21)).toBe(0);
  });
  
});
