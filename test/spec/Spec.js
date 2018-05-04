/* TO DO -List 
*   question:
      id
      question
      correctAnswer
      answers

    answer:
      id

*
*
*
*/




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
describe('comprobación de las respuestas', function () {
  let questionDescription = {
    id: 1,
    title: '¿Cuál es la capital de Alemania?',
    answers: [
      {id: 1, value: 'Madrid'},
      {id: 2, value: 'México'},
      {id: 3, value: 'Berlín', isCorrect: true}
    ]
  };
  let userAnswer = {
    id: 3
  }
  function isCorrect (question, userAnswer) {
    const answersArray = question.answers;
    
    for (let item = 0; item < answersArray.length; item++) {
      const element = answersArray[item];
      if (element.id === userAnswer.id) {
        if (element.isCorrect === true) {
          return true;
        }
        else{
          return false;
        }
      }
      
    }
    // if(userAnswer.id === questionDescription.answers.id){
    //   if(questionDescription.answers.isCorrect === true){
    //     return true;
    //   }
    // }
  }
  it('la respuesta es incorrecta', function () {
    expect(isCorrect(questionDescription, userAnswer)).toBe(true);
  });
});


xdescribe('cálculo de marcador si es correcta', function () {
  function recalculateScoreWhenIsCorrect(score, seconds) {
    if (seconds <= 2) {
      return score + 2;
    }
    if (seconds <= 10) {
      return score + 1;
    }
    if (seconds > 10) {
      return score;
    }
  }
  

  it("suma mas puntos si acierta muy rapido", function () {
    expect(recalculateScoreWhenIsCorrect(0, 1)).toBe(2);
    expect(recalculateScoreWhenIsCorrect(2, 1)).toBe(4);
  });

  it("suma 1 punto si acierta entre 2 y 10 segundos", function () {
    expect(recalculateScoreWhenIsCorrect(0, 3)).toBe(1);
    expect(recalculateScoreWhenIsCorrect(0, 10)).toBe(1);
    expect(recalculateScoreWhenIsCorrect(0, 11)).not.toBe(1);
  });

  it("no suma puntos si acierta en más de 10 segundos", function () {
    expect(recalculateScoreWhenIsCorrect(0, 11)).toBe(0);
  });
  
});

xdescribe('cálculo de marcador si es incorrecta', function () {
  function recalculateScoreWhenIsIncorrect(score, seconds) {
    if (seconds <= 10) {
      return score - 1;
    }
    if (seconds <= 20) {
      return score - 2;
    }
    else if (seconds > 20) {
      return score - 3;
    }
  }
 
  it("resta menos puntos si fallo rápido", function () {
    expect(recalculateScoreWhenIsIncorrect(1, 5)).toBe(0);
    expect(recalculateScoreWhenIsIncorrect(1, 10)).toBe(0);
  });

  it("resta más puntos si fallo en más de 10 segundos", function () {
    expect(recalculateScoreWhenIsIncorrect(2, 11)).toBe(0);
    expect(recalculateScoreWhenIsIncorrect(4, 11)).toBe(2);
  });

  it("resta más puntos si no contesto en 20 segundos", function () {
    expect(recalculateScoreWhenIsIncorrect(3, 21)).toBe(0);
  });
});

xdescribe('cálculo de marcador si no hay respuesta', function () {
  function recalculateScoreWhenNoAnswer(score) {
    return score - 3;
  }

  it("resta puntos si no hay respuesta", function () {
    expect(recalculateScoreWhenNoAnswer(3, 21)).toBe(0);
  });
});
