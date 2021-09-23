store.testsCount = 3;

describe('Вводим количество человек по ролям в команде', () => {
    it('Если суммарно меньше двух человек в команде, то должна выводится ошибка', () => {
        chai.expect(countPizza(0,0,0,0,0,0,0,0,0,0,0,0)).to.equal('В команде должно быть не менее двух человек')
        chai.expect(countPizza(0,1,0,0,0,0,0,0,0,0,0,0)).to.equal('В команде должно быть не менее двух человек')
        chai.expect(countPizza(0,0,0,0,0,0,0,1,0,0,0,0)).to.equal('В команде должно быть не менее двух человек')
      });
    
      it('Если вводим отрицательные числа, или текст должна быть ошибка "Не могу посчитать, данные некорректны"', () => {
        chai.expect(countPizza(0,0,0,0,-1,0,0,0,0,0,0,0)).to.equal('Не могу посчитать, данные некорректны')
        chai.expect(countPizza(0,"45",0,0,0,0,0,0,0,0,0,0)).to.equal('Не могу посчитать, данные некорректны')
        chai.expect(countPizza(0,0,0,0,0,0,0,-3,0,0,0,0)).to.equal('Не могу посчитать, данные некорректны')
      });
      (trainee, juniorBackend, middleBackend, seniorBackend, juniorFrontend, middleFronten,seniorFrontend, juniorQA, middleQA, teamLead, seniorQA, manager)
      it('Получить количество пицц исходя из размера команды', () => {
        chai.expect(countPizza(1,1,1,1,1,1,1,1,1,1,1,1)).to.equal('"Пепперони = ",pizzaPepperoni," Моцарелла = ",pizzaMozarella," Чилийская = ",pizzaChiliyskaya')
        chai.expect(countPizza(0,1,0,0,1,1,0,0,0,0,0,1)).to.equal('Не могу посчитать, данные некорректны')
        chai.expect(countPizza(0,0,1,0,0,2,0,0,0,0,2,0)).to.equal('Не могу посчитать, данные некорректны')
        chai.expect(countPizza(0,3,0,1,0,0,3,0,0,0,0,1)).to.equal('Не могу посчитать, данные некорректны')
        chai.expect(countPizza(2,0,0,0,1,0,0,4,0,0,2,0)).to.equal('Не могу посчитать, данные некорректны')
        chai.expect(countPizza(0,3,0,0,0,1,0,0,5,0,0,1)).to.equal('Не могу посчитать, данные некорректны')
        chai.expect(countPizza(0,0,1,0,0,0,1,0,0,6,2,0)).to.equal('Не могу посчитать, данные некорректны')
      });

});