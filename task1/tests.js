store.testsCount = 2;

document.querySelector('#testsCount').innerHTML = store.testsCount;

describe('тесты для isEven', () => {
  it('Возвращаем true, если число четное', () => {
    chai.expect(isEven(2)).to.equal(true)
  });

  it('Возвращаем true, если число не четное', () => {
    chai.expect(isEven(3)).to.equal(false)
  });

  afterEach(function() {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(function() {
    setTimeout(() => {
      document.querySelector('#successTestsCount').innerHTML = store.successTestsCount;
      document.querySelector('#progress').style.width = `${((800 / store.testsCount) * store.successTestsCount)}px`;
    }, 500)
  });
});