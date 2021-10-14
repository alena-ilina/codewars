let team = {"trainee":0,
    "juniorBackend":0,
    "middleBackend":0,
    "seniorBackend":0,
    "teamLead":0,
    "juniorFrontend":0,
    "middleFrontend":0,
    "seniorFrontend":0}
let employee = ""
bugs = 0
сrutchs = 0
function getBugsANDCrutchs(team){
    for(let employee in team) {
        if((team["juniorBackend"] + team["middleBackend"] + team["seniorBackend"]) < 2)   {
            return("Ошибка, необходимо два backend-разработчика")
        }
        
        if((team["juniorFrontend"] + team["middleFrontend"] + team["seniorFrontend"]) < 1)   {
            return("Ошибка, необходим frontend - разработчик")
        }

        if(team["teamLead"] === 0)   {
            return("Ошибка, необходим teamlead")
        }
        if (employee ==="trainee"){
            bugs = bugs + team[employee] * 1 * 3;
            сrutchs = сrutchs + team[employee] * 0 * 3;
        };
        if (employee ==="juniorBackend"){
            bugs = bugs + team[employee] * 3 * 3 ;
            сrutchs = сrutchs + team[employee] * 1 * 3;
        };
        if (employee ==="middleBackend"){
            bugs = bugs + team[employee] * 2 * 3;
            сrutchs = сrutchs + team[employee] * 3 * 3;
        };
        if (employee ==="seniorBackend"){
            bugs = bugs + team[employee] * 1 * 3;
            сrutchs = сrutchs + team[employee] * 1 * 3;
        };
        if (employee ==="juniorFrontend"){
            bugs = bugs + team[employee] * 2 * 3;
            сrutchs = сrutchs + team[employee] * 4 * 3;
        };
        if (employee ==="middleFrontend"){
            bugs = bugs + team[employee] * 3 * 3;
            сrutchs = сrutchs + team[employee] * 3 * 3;
        };
        if (employee ==="seniorFrontend"){
            bugs = bugs + team[employee] * 1 * 3;
            сrutchs = сrutchs + team[employee] * 1 * 3;
        };
        if (employee ==="teamLead"){
            bugs = bugs + team[employee] * 1;
            сrutchs = сrutchs + team[employee] * 0 * 3;
        };

        return("Итого: ", bugs, " багов", caches, " костылей в квартал")
        }}
