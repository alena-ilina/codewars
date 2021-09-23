pepperoni= 0;
mozarella = 0;
chiliyskaya = 0;
havayskaya = 0;


trainee = 0;
juniorBackend = 0;
middleBackend = 0;
seniorBackend = 0;
juniorFrontend = 0;
middleFrontend = 0;
seniorFrontend = 0;
juniorQA = 0;
middleQA = 0;
seniorQA =0;
teamLead = 0;
manager = 0;

function countPizza(trainee, juniorBackend, middleBackend, seniorBackend, juniorFrontend, middleFronten,seniorFrontend, juniorQA, middleQA, teamLead, seniorQA, manager) 
{
    if (trainee + juniorBackend + middleBackend + seniorBackend + juniorFrontend + middleFrontend + seniorFrontend + teamLead + manager < 2) {
        return("В команде должно быть не менее двух человек")
    }

    if (trainee!==0) {
        if (trainee < 0){ return("Не могу посчитать, данные некорректны")};  
        pepperoni=pepperoni + (trainee*2);
    }

    if (juniorBackend!==0) {
        if (juniorBackend < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (juniorBackend*1);
        mozarella = mozarella + (juniorBackend*2);
    }

    if (middleBackend!==0) {
        if (middleBackend < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (middleBackend*3);
        mozarella = mozarella + (middleBackend*1);
        chiliyskaya = chiliyskaya + (middleBackend*1);
    }

    if (seniorBackend!==0) {
        if (seniorBackend < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (seniorBackend*3);
        mozarella = mozarella + (seniorBackend*2);
        chiliyskaya = chiliyskaya + (seniorBackend*1);
    }

    if (juniorFrontend!==0) {
        if (juniorFrontend < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (juniorFrontend*2);
        mozarella = mozarella + (juniorFrontend*1);
    }

    if (middleFrontend!==0) {
        if (middleFrontend < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (middleFrontend*1);
        mozarella = mozarella + (middleFrontend*3);
        chiliyskaya = chiliyskaya + (middleFrontend*1);
    }

    if (seniorFrontend!==0) {
        if (seniorFrontend < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (seniorFrontend*2);
        mozarella = mozarella + (seniorFrontend*3);
        chiliyskaya = chiliyskaya + (seniorFrontend*1);
    }

    if (juniorQA!==0) {
        if (juniorQA < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (juniorQA*1);
        mozarella = mozarella + (juniorQA*1);
        chiliyskaya = chiliyskaya + (juniorQA*1);
    }

    if (middleQA!==0) {
        if (middleQA < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (middleQA*1);
        mozarella = mozarella + (middleQA*1);
        chiliyskaya = chiliyskaya + (middleQA*2);
    }

    if (seniorQA!==0) {
        if (seniorQA < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (seniorQA*2);
        mozarella = mozarella + (seniorQA*2);
        chiliyskaya = chiliyskaya + (seniorQA*1);
    }
    if (teamLead!==0) {
        if (teamLead < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (teamLead*2);
        chiliyskaya = chiliyskaya + (teamLead*3);
    }

    if (manager!==0) {
        if (trainee < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (seniorQA*2);
        mozarella = mozarella + (seniorQA*1);
        chiliyskaya = chiliyskaya + (seniorQA*1); 
    }

    pizzaPepperoni = Math.ceil(pepperoni/8)
    pizzaMozarella = Math.ceil(mozarella/8)
    pizzaChiliyskaya = Math.ceil(chiliyskaya/8)

    return("Пепперони = ",pizzaPepperoni," Моцарелла = ",pizzaMozarella," Чилийская = ",pizzaChiliyskaya);
}