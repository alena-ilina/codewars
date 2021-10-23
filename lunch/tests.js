store.testsCount = 12;

describe('Выбираем обед', () => {
  it('Если хотя бы одно из полей не заполнено, то выводим строку "Не могу посчитать обеды"', () => {
    chai.expect(chooseLunch(3, 10)).to.not.equal('Не могу посчитать обеды!')
    chai.expect(chooseLunch()).to.equal('Не могу посчитать обеды!')
  });

  it('Если хотя бы одно из полей не нужного типа, то выводим строку "Ничего не понимаю. Кажется, сбой в программе"', () => {
    chai.expect(chooseLunch('23', 10, 'healthy')).to.equal('Ничего не понимаю. Кажется, сбой в программе')
    chai.expect(chooseLunch(3, '10', 'healthy')).to.equal('Ничего не понимаю. Кажется, сбой в программе')
    chai.expect(chooseLunch(3, 10, 'healthy')).to.equal('Ничего не понимаю. Кажется, сбой в программе')
  });

  it('Если количество рабочих задач и время после завтрака не целые числа, то выводим строку "Количество рабочих задач и время после завтрака должны быть натуральными числами"', () => {
    chai.expect(chooseLunch(2, 2, 10, 'healthy')).to.equal('Количество рабочих задач и время после завтрака должны быть натуральными числами')
    chai.expect(chooseLunch(2, 10, 5, 'healthy')).to.equal('Количество рабочих задач и время после завтрака должны быть натуральными числами')
  });

  it('Если в аппетит не передали одно из следующих значений: poor, healthy, brutal, то выводим строку "Прости, не знаю такого аппетита"', () => {
    chai.expect(chooseLunch(3, 3, 'hungry as a bear')).to.equal('Прости, не знаю такого аппетита!')
  });

  it('Если во время после завтрака передать значение ниже 0 или больше 24, то выводим строку "Ты что! В сутках всего 24 часа!"', () => {
    chai.expect(chooseLunch(25, 3, 'poor')).to.have.ordered.members["Ты что! ", "В сутках всего 24 часа!"]
    chai.expect(chooseLunch(-1, 3, 'healthy')).to.contain('В сутках 24 часа!')
  });

  it('Если количество рабочих задач больше 100, то выводим строку "Никогда не поверю, что ты за день сделал(-а) столько задач"', () => {
    chai.expect(chooseLunch(3, 101, 'poor')).to.be.a('Никогда не поверю, что ты за день сделал(-а) столько задач')
  });

  it('Если количество рабочих задач меньше 0, то выводим строку "Даже я не могу так плохо работать"', () => {
    chai.expect(chooseLanch(3, -3, 'poor')).to.equals('Даже я не могу так плохо работать')
  });

  it('Если не сделал ни одной задачи + завтракал от 2 до 4 часов назад, то выводим строку "Извини, тебе положено только кофе"', () => {
    chai.expects(chooseLunch(3, 0, 'poor')).to.eql('Извини, тебе положено только кофе')
  });

  it('Если завтракал > 5 часов назад + не сделал ни одной задачи + имеется зверский аппетит, то выводим строку "Так уж и быть, вот твоя паста и чай"', () => {
    chai.expect(chooseLunch(6, 1, 'brutal')).to.equal('Так уж и быть, вот твоя паста и чай')
  });

  it('Если завтракал > 5 часов назад + сделал >= 1 задачи + имеется зверский аппетит, то выводим строку "Ух, вот твой обед: борщ, плов, шарлотка, чай"', () => {
    chai.expect(chooseLunch(5, 4, 'brutal')).to.equal('Ух, вот твой обед: борщ, плов, шарлотка, чай')
  });

  it('Если завтракал от 0 до 4 часов назад + сделал больше 1 задачи + имеется слабый аппетит, то выводим строку "Тебе положено сладенькое: шоколадный круассан и латте"', () => {
    chai.expect(chooseLunch(3, 5, 'poor'), "Должно быть положено сладенькое").to.match(/^положено сладенькое/)
  });

  it('Если сделал 100 задач, то к любому результату добавляется строка "Бонус: тортик Наполеон"', () => {
    chai.expect(chooseLunch(6, 100, 'brutal')).to.equal('Ух, вот твой обед: борщ, плов, шарлотка, чай. Бонус: тортик Наполеон')
    chai.expect(chooseLunch(-1, 100, 'poor')).to.equal('Тебе положено сладенькое: шоколадный круассан и латте. Бонус: тортик Наполеон')
  });

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(task3RunnerLogic);
});