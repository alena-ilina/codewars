store.testsCount = 5;

team = {"trainee":0,
    "juniorBackend":0,
    "middleBackend":0,
    "seniorBackend":0,
    "teamLead":0,
    "juniorFrontend":0,
    "middleFrontend":0,
    "seniorFrontend":0}

describe('Количество костылей и багов за квартал', () => {
    it('Проверить, что должно быть два backend-разработчика"', () => {
        team["juniorBackend"] = 1
        team["juniorFrontend"] = 1
        team["teamLead"] = 1
        chai.expect(getBugsANDCrutchs(team)).to.equal('Ошибка, необходимо два backend-разработчика')
      });

      it('Проверить, когда в каждой роли по одому сотруднику"', () => {
        team["juniorBackend"] = 1
        team["middleBackend"]
        team["seniorBackend"]
        team["juniorFrontend"] = 1
        team["middleFrontend"] = 1
        team["seniorFrontend"] = 1
        team["teamLead"] = 1
        chai.expect(getBugsANDCrutchs(team)).to.equal('Итого: 33 костыля, 46 багов за квартал')
      });

      it('Проверить алерт на количество фронтендеров"', () => {
        team["juniorBackend"] = 2
        team["middleBackend"] = 0
        team["seniorBackend"] = 0
        team["juniorFrontend"] = 0
        team["middleFrontend"] = 0
        team["seniorFrontend"] = 0
        team["teamLead"] = 0
        chai.expect(getBugsANDCrutchs(team)).to.equal('Ошибка, необходим frontend - разработчик')
      });

      it('Проверить алерт на отсутствие тимлида"', () => {
        team["juniorBackend"] = 2
        team["middleBackend"] = 0
        team["seniorBackend"] = 0
        team["juniorFrontend"] = 0
        team["middleFrontend"] = 1
        team["seniorFrontend"] = 0
        team["teamLead"] = 0
        chai.expect(getBugsANDCrutchs(team)).to.equal('Ошибка, необходим teamlead')
      });

      it('Проверить расчет с минимальным количеством участников"', () => {
        team["juniorBackend"] = 0
        team["middleBackend"] = 1
        team["seniorBackend"] = 1
        team["juniorFrontend"] = 1
        team["middleFrontend"] = 0
        team["seniorFrontend"] = 0
        team["teamLead"] = 1
        chai.expect(getBugsANDCrutchs(team)).to.equal('Итого: 18 костылей, 25 багов за квартал')
      });
    
  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});