// Этот файл изменять низзя!

store.testsCount = 5;

reason = {
  "degrees": 0,
  "wet": 0,
  "wind": 0,
  "cloudy": 0
}
finalTemperature = 0

describe('Посчитать на какую температуру ощущается погода', () => {
  it('Входная температура -100"', () => {
    reason = {
      "degrees": -100,
      "wet": 0,
      "wind": 0,
      "cloudy": 0
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Ощущается как -97');
  });

  it('Вх. темп. = 32, влажность 70, ветер 8, облачность 10', () => {
    reason = {
      "degrees": 32,
      "wet": 70,
      "wind": 8,
      "cloudy": 10
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Ощущается как 39')

  });

  it('Вх. темп. = 15, остальные параметры 0', () => {
    reason = {
      "degrees": 15,
      "wet": 0,
      "wind": 0
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Ощущается как 16')

  });

  it('Сегодня - выходной', () => {
    reason = {
      "degrees": 0,
      "wet": 0,
      "wind": 0,
      "cloudy": 0,
      "isWeekend": true
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Сегодня выходной, какая разница, какая погода? Лучше отоспись!')

  });

  it('Вх. темп = 1, влажность 69, ветер 13, облачность 100', () => {
    reason = {
      "degrees": 1,
      "wet": 69,
      "wind": 13,
      "cloudy": 100
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Ощущается как -1')

  });

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});