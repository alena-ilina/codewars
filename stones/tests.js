store.testsCount = 10;

  beforeEach(function() {
    getCountWin(1,0)
  });

describe('Играем до 3 побед', () => {
  it('Первый раунд', () => {
    chai.expect(getWin("ножницы", "бумага")).to.equal('Счет 1:0 Ножницы режут бумагу')
  });
  it('Второй раунд', () => {
    chai.expect(getWin("бумага", "камень")).to.equal('Счет 2:0 Бумага покрывает камень')
  });
  it('Третий раунд', () => {
    chai.expect(getWin("камень", "ящерица")).to.equal('Игра завершена cчет 3:0 Камень давит ящерицу')
  });
  it('Первый раунд', () => {
    chai.expect(getWin("ящерица", "спок")).to.equal('Счет 1:0 Ящерица отравляет спока')
  });
  it('Второй раунд', () => {
    chai.expect(getWin("спок", "ножницы")).to.equal('Счет 2:0 Спок ломает ножницы')
  });
  it('Третий раунд', () => {
    chai.expect(getWin("ножницы", "ящерица")).to.equal('Игра завершена cчет 3:0 Ножницы обезглавливают ящерицу')
  });
  it('Первый раунд', () => {
    chai.expect(getWin("ящерица", "бумага")).to.equal('Счет 1:0 Ящерица съедает бумагу')
  });
  it('Второй раунд', () => {
    chai.expect(getWin("бумага", "спок")).to.equal('Счет 2:0 Бумага подставляет спока')
  });
  it('Третий раунд', () => {
    chai.expect(getWin("спок", "камень")).to.equal('Игра завершена cчет 3:0 Спок испаряет камень')
  });
  it('Первый раунд', () => {
    chai.expect(getWin("камень", "ножницы")).to.equal('Счет 1:0 Камень разбивает ножницы')
  });

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});
