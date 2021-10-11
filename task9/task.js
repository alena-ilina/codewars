pepperoni= 0;
mozarella = 0;
chiliyskaya = 0;
havayskaya = 0;


trainee = 0;
backender = 0;
frontender = 0;
qa = 0;
teamLead = 0;
manager = 0;

function countPizza() 
{
    if ((trainee + backender + frontender + qa + teamLead + manager) < 2) {
        return("В команде должно быть не менее двух человек")
    }

    if (trainee!==0) {
        if (trainee < 0){ return("Не могу посчитать, данные некорректны")};  
        pepperoni=pepperoni + (trainee*1.2);
    }

    if (backender!==0) {
        if (backender < 0){ return("Не могу посчитать, данные некорректны")}; 
        mozarella = mozarella + (backender*1.3);
    }

    if (frontender!==0) {
        if (frontender < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (frontender*1.1);
        mozarella = mozarella + (frontender*1.2);
        chiliyskaya = chiliyskaya + (frontender*1.1)
    }

    if (qa!==0) {
        if (qa < 0){ return("Не могу посчитать, данные некорректны")}; 
        mozarella = mozarella + (qa*1.1);
        chiliyskaya = chiliyskaya + (qa*1.2)
    }

    if (teamLead!==0) {
        if (teamLead < 0){ return("Не могу посчитать, данные некорректны")}; 
        pepperoni=pepperoni + (teamLead*1.2);
        mozarella = mozarella + (teamLead*1.2);
        chiliyskaya = chiliyskaya + (teamLead*1.1);
    }

    if (manager!==0) {
        if (manager < 0){ return("Не могу посчитать, данные некорректны")}; 
        mozarella = mozarella + (manager*1.2);
        chiliyskaya = chiliyskaya + (manager*1.1); 
    }

    pizzaPepperoni = Math.ceil(pepperoni)
    pizzaMozarella = Math.ceil(mozarella)
    pizzaChiliyskaya = Math.ceil(chiliyskaya)

    return("Пепперони = ",pizzaPepperoni," Моцарелла = ",pizzaMozarella," Чилийская = ",pizzaChiliyskaya);
}