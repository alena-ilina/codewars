store.testsCount = 3;

describe('Пицца', () => {
  it('Если в команде меньше 2х людей, выводится предупреждение', () => {
    chai.expect(countPizza(1, 0, 0, 0, 0, 0)).to.equal('В команде должно быть не менее двух человек')
  });

  it('Если в параметры передали отрицательное число, выводится предупреждение', () => {
    chai.expect(countPizza(-1, 0, 0, 0, 0, 3)).to.equal('Не могу посчитать, данные некорректны'),
      chai.expect(countPizza(0, -1, 0, 0, 0, 3)).to.equal('Не могу посчитать, данные некорректны'),
      chai.expect(countPizza(0, 0, -1, 0, 0, 3)).to.equal('Не могу посчитать, данные некорректны'),
      chai.expect(countPizza(0, 0, 0, -1, 0, 3)).to.equal('Не могу посчитать, данные некорректны'),
      chai.expect(countPizza(0, 0, 0, 0, -1, 3)).to.equal('Не могу посчитать, данные некорректны'),
      chai.expect(countPizza(0, 0, 0, 0, 3, -1)).to.equal('Не могу посчитать, данные некорректны')
  });

  it('Если в команде есть тимлид...', () => {
    chai.expect(countPizza(0, 0, 0, 0, 2, 0)).to.equal('Пепперони = 3 Моцарелла = 3 Чилийская = 3')
  })

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});