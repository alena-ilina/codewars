store.testsCount = 7;

reason = {
  "degrees": 0,
  "wet": 0,
  "wind": 0,
  "cloudy": 0
}
var finalTemperature = 0

describe('Посчитать на какую температуру ощущается погода', () => {
  it('Входная температура меньше -100"', () => {
    reason = {
      "degrees": -100,
      "wet": 0,
      "wind": 0,
      "cloudy": 0
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('В такую погоду люди дома сидят, телевизор смотрят.')
  });

  it('Входная температура 71"', () => {
    reason = {
      "degrees": 71,
      "wet": 0,
      "wind": 0,
      "cloudy": 0
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Слишком жарко, и ощущается так же.')
  });

  it('Вх. темп. = -5, влажность 70, ветер 14, облачность 40', () => {
    reason = {
      "degrees": -5,
      "wet": 70,
      "wind": 14,
      "cloudy": 40
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Ощущается как -8')
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
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Ощущается как 18')

  });

  it('Все параметры = 0', () => {
    reason = {
      "degrees": 0,
      "wet": 0,
      "wind": 0,
      "cloudy": 0
    }
    chai.expect(getFeelingTheeWeather(reason)).to.equal('Ощущается как 3')

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

  after(task1RunnerLogic);
});