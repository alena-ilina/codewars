// Этот файл изменять низзя!

store.testsCount = 5;

describe('Выбираем закуску к винишку', () => {
  it('Если функцию вызвать дважды с одним и тем же запрошенным вином, то вернуть "Ты меня уже спрашивал, забыл чтоли?', () => {
    let result;
    result = chooseAppetites('Бордо')
    result = chooseAppetites('Бордо')

    chai.expect(result).to.equal('Ты меня уже спрашивал, забыл чтоли?')
  });

  it('Если передали "Carmenere", то вернуть "Не ищи особой закуски. Любой ужин будет с ним ещё лучше!"', () => {
    chai.expect(chooseAppetites('Carmenere')).to.equal('Не ищи особой закуски. Любой ужин будет с ним ещё лучше!')
  });

  it('Если передали "Красное вино", то вернуть "Так из тебя эстета не сделаешь. Нужно знать сорт винограда. Изучи на бутылке!"', () => {
    chai.expect(chooseAppetites('Красное вино')).to.equal('Так из тебя эстета не сделаешь. Нужно знать сорт винограда. Изучи на бутылке!')
  });

  it('Если передали пустую строку, то вернуть "Истина в вине, а не в тишине."', () => {
    chai.expect(chooseAppetites('')).to.equal('Истина в вине, а не в тишине.')
  });

  it(`
  Если у переданного имени вина название длиннее 10 символов, и его нет среди известных вин,
  то выводить дополнительно "Такое название фиг запомнишь! Ну и вино же ты выбрал!"`, () => {
    chai.expect(chooseAppetites('Киндзмараули')).to.equal('Я не разбираюсь, попробуй что-то нейтральное: птицу или твёрдый сыр. Такое название фиг запомнишь! Ну и вино же ты выбрал!')
  });

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});