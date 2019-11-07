store.testsCount = 7;
// Бага с котом!
const currentTimezone = { hours: 5, mins: 0 };
const middle = { day: 8, month: 11, hours: 12, mins: 0 };
const end = { day: 8, month: 11, hours: 23, mins: 0 };
const start = { day: 8, month: 11, hours: 1, mins: 0 };
describe('Определяем дату и время прилета', () => {
  it('Часовой пояс отлета UTC+5, часовой пояс прилета UTC+5', () => {
    chai.expect(whenArrival(middle, currentTimezone, currentTimezone)).to.deep.equal({...middle, hours: 16})
  });
  it('Часовой пояс отлета UTC+5, часовой пояс прилета UTC+6', () => {
    chai.expect(whenArrival(middle, currentTimezone, {hours: 6, mins: 0})).to.deep.equal({...middle, hours: 17})
  });
  it('Часовой пояс отлета UTC+5, часовой пояс прилета UTC+1', () => {
    chai.expect(whenArrival(middle, currentTimezone, {hours: 1, mins: 0})).to.deep.equal({...middle})
  });
  it('Часовой пояс отлета UTC+5, часовой пояс прилета UTC+2:30', () => {
    chai.expect(whenArrival(middle, currentTimezone, {hours: 2, mins: 30})).to.deep.equal({...middle, hours: 13, mins: 30})
  });
  it('Часовой пояс отлета UTC+5, часовой пояс прилета UTC+5, вылет в 23:00', () => {
    chai.expect(whenArrival(end, currentTimezone, currentTimezone)).to.deep.equal({day: 9, month: 11, hours: 3, mins: 0})
  });
  it('Часовой пояс отлета UTC+5, часовой пояс прилета UTC-1, вылет в 01:00', () => {
    chai.expect(whenArrival(start, currentTimezone, { hours: -1, mins: 0 })).to.deep.equal({ day: 7, month: 11, hours: 23, mins: 0 })
  });
  it('Часовой пояс отлета UTC+5, часовой пояс прилета UTC+20, вылет в 23:00', () => {
    chai.expect(whenArrival(end, currentTimezone, currentTimezone)).to.deep.equal({day: 9, month: 11, hours: 3, mins: 0})
  });

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});