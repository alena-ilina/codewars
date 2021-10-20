store.testsCount = 8;

  before(function () {
    initialPrice = 1000;
  });

describe('Считаем стоимость билетов', () => {
  it('Два одинаковых условия', () => {
    chai.expect(getPriceTicket(initialPrice, "Длительная гроза", "Длительная гроза")).to.equal('Стой!Ты выбрал два одинаковых условия')
  });

  it('Противоречивые условия', () => {
    chai.expect(getPriceTicket(initialPrice, "Длительная гроза", "Лето, солнце")).to.equal('Не может быть одновременно солнце и длительная гроза')
  });

  it('Выбрано только одно условие', () => {
    chai.expect(getPriceTicket(initialPrice, "Длительная гроза")).to.equal('Самолет промок. Цена билета увеличена на 20%. Итого цена билета:1200')
  });

  it('Не выбрано ни одно условие', () => {
    chai.expect(getPriceTicket(initialPrice, "", "")).to.equal('Отлично, цена не увеличена. Итого цена билета:' + initialPrice)
  });

  it('Выбран рейс с питанием', () => {
    chai.expect(getPriceTicket(initialPrice, "Рейс с питанием", "")).to.equal('Еда стоит денег. Цена билета увеличена на 5%. Итого цена билета:' + initialPrice * 1.05)
  });

  it('Выбрано самолет с широкими креслами', () => {
    chai.expect(getPriceTicket(initialPrice, "", "Самолет с широкими креслами")).to.equal('За комфорт надо платить. Цена билета увеличена на 7%. Итого цена билета:' + initialPrice * 1.07)
  });

  it('Выбрано длительная гроза и самолет с широкими креслами', () => {
    chai.expect(getPriceTicket(initialPrice, "Длительная гроза", "Самолет с широкими креслами")).to.equal('Самолет промок. Цена билета увеличена на 20%. За комфорт надо платить. Цена билета увеличена на 7%. Итого цена билета:' + initialPrice * 1.2 * 1.07)
  });

  it('Выбрано лето, солнце и рейс с питанием', () => {
    chai.expect(getPriceTicket(initialPrice, "Лето, солнце", "Рейс с питанием")).to.equal('Все хотят в отпуск. Цена билета увеличена на 40%. Еда стоит денег. Цена билета увеличена на 5%. Итого цена билета:' + initialPrice * 1.4 * 1.05)
  });

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});