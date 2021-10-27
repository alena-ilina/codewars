store.testsCount = 3;

describe('Пицца', () => {

  // Изучи код в файле code_pizza.js.
  // Напиши недостающий тест по примеру первых двух.

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

  // Напиши тест, проверяющий следующий сценарий: Если в команде есть тимлид, должно прибавляться правильное количество пиццы

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(task6RunnerLogic);
});