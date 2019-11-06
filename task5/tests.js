store.testsCount = 1;
// Бага с котом!
describe('Выбираем закуску к винишку', () => {
  it('Если передали "Бордо", то вернуть "Камамбер"', () => {
    chai.expect(chooseAppetites('Бордо')).to.equal('Камамбер')
  });

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});