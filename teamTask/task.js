/* Код прогнозирует, сколько багов и костылей
будет в команде за квартал в зависимости от её состава.
Перепиши код так,чтобы все тесты в соседнем файле прошли успешно.
Тогда котик получит свой клубок. Удачи!
P.S. Не забывай нажимать ctrl+S, чтобы видеть результаты 
своих правок.
*/

let team = {
  "trainee": 0,
  "juniorBackend": 0,
  "middleBackend": 0,
  "seniorBackend": 0,
  "teamLead": 0,
  "juniorFrontend": 0,
  "middleFrontend": 0,
  "seniorFrontend": 0
}
let employee = ""
let bugs = 0
let сrutchs = 0
let teamEmployeeCount = 0
let teamSpiritCoeff = 0.9

function getBugsANDCrutchs(team) {
  if ((team["juniorBackend"] + team["middleBackend"] + team["seniorBackend"]) < 2) {
    return "Ошибка, необходимо два beckend-разработчика"
  } 

  if ((team["juniorFrontend"] + team["middleFrontend"] + team["seniorFrontend"]) < 0) {
    return "Ошибка, необходим frontend - разработчик"
    
  }

  if (team["QA"] > 0) {
    return "Никаких багов и коcтылей! Не в мою смену!"
  }

  for (let employee in team) {
    if (team[employee] > 0) {
      teamEmployeeCount++;
    }

    if (employee === "trainee") {
      bugs = bugs + team[employee] * 1 * 3;
      сrutchs = сrutchs + team[employee] * 0 * 3;

    };

    if (employee === "juniorBackend") {
      bugs = bugs + team[employee] * 3 * 3;
      сrutchs = сrutchs + team[employee] * 1 * 3;
      if (team[employee] >= 2)
        return 'Астрологи предсказали квартал багов, количество багов увеличилось втрое!'
    };

    if (employee === "middleBackend") {
      bugs = bugs + team[employee] * 2 * 3;
      сrutchs = сrutchs + team[employee] * 3 * 3;
    };

    if (employee === "seniorBackend") {
      bugs = bugs + team[employee] * 1 * 3;
      сrutchs = сrutchs + team[employee] * 1 * 3;
    };

    if (employee === "juniorFrontend") {
      bugs = bugs + team[employee] * 3 * 3;
      сrutchs = сrutchs + team[employee] * 4 * 3;
    };

    if (employee === "middleFrontend") {
      bugs = bugs + team[employee] * 2 * 3;
      сrutchs = сrutchs + team[employee] * 3 * 3;
    };

    if (employee === "seniorFrontend") {
      bugs = bugs + team[employee] * 1 * 3;
      сrutchs = сrutchs + team[employee] * 1 * 3;
    };

    if (employee === "teamLead") {
      bugs = bugs + team[employee] * 1;
      сrutchs = сrutchs + team[employee] * 0 * 3;
    };
  }

  if ((teamEmployeeCount >= 8)) {
    bugs = bugs * teamSpiritCoeff;
  }

  const result = `Итого: ${bugs} багов, ${сrutchs} костылей за квартал`
  teamEmployeeCount = 0
  bugs = 0
  сrutchs = 0
  return result
}