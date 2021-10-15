store.testsCount = 5;

/*team = {"trainee":0,
    "juniorBackend":0,
    "middleBackend":0,
    "seniorBackend":0,
    "teamLead":0,
    "juniorFrontend":0,
    "middleFrontend":0,
    "seniorFrontend":0}*/

describe('Количество костылей и багов за квартал', () => {
    it('Проверить, что должно быть два backend-разработчика"', () => {
        team = {"trainee":0,
        "juniorBackend":1,
        "middleBackend":0,
        "seniorBackend":0,
        "teamLead":1,
        "juniorFrontend":1,
        "middleFrontend":0,
        "seniorFrontend":0}

        chai.expect(getBugsANDCrutchs(team)).to.equal('Ошибка, необходимо два backend-разработчика')
      });

      it('Проверить, когда в каждой роли по одому сотруднику"', () => {
        team = {"trainee":1,
        "juniorBackend":1,
        "middleBackend":1,
        "seniorBackend":1,
        "teamLead":1,
        "juniorFrontend":1,
        "middleFrontend":1,
        "seniorFrontend":1}
        chai.expect(getBugsANDCrutchs(team)).to.equal('Итого: 40 багов, 39 костылей за квартал')
      });

      it('Проверить алерт на количество фронтендеров"', () => {
        team = {"trainee":0,
        "juniorBackend":2,
        "middleBackend":0,
        "seniorBackend":0,
        "teamLead":1,
        "juniorFrontend":0,
        "middleFrontend":0,
        "seniorFrontend":0}
        chai.expect(getBugsANDCrutchs(team)).to.equal('Ошибка, необходим frontend - разработчик')
      });

      it('Проверить алерт на отсутствие тимлида"', () => {
        team = {"trainee":0,
        "juniorBackend":2,
        "middleBackend":0,
        "seniorBackend":0,
        "teamLead":0,
        "juniorFrontend":0,
        "middleFrontend":1,
        "seniorFrontend":0}
        chai.expect(getBugsANDCrutchs(team)).to.equal('Ошибка, необходим teamlead')
      });

      it('Проверить расчет с минимальным количеством участников"', () => {
        team = {"trainee":0,
        "juniorBackend":0,
        "middleBackend":1,
        "seniorBackend":1,
        "teamLead":1,
        "juniorFrontend":1,
        "middleFrontend":0,
        "seniorFrontend":0}
        chai.expect(getBugsANDCrutchs(team)).to.equal('Итого: 16 багов, 24 костылей за квартал')
      });
    
  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});