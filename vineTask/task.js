/* Код определяет, какую закуску лучше выбрать 
к тому или иному сорту вина. Перепиши код так, 
чтобы все тесты в соседнем файле прошли успешно
и котик получил свой клубок. Удачи!
*/

let recievedVineTitles = '';
const vineTitles = ['Бордо', 'Bordeaux', 'Moscatel', 'Carmenere', 'Красное вино']

function chooseAppetites(vineTitle) {
  let result = [];

  if (recievedVineTitles === vineTitle) {
    return 'Ты меня уже спрашивал, тестировщик чтоли?'
  }

  const vines = vineTitle.split(',');

  if (vines.length > 1) {
    result.push('сыр, виноград');

    if (vines.find((vine) => vine.length > 10)) {
      result.push('Такое название фиг запомнишь! Ну и вино же ты выбрал!');
    }

    return result.join(' ');
  }

  if (vineTitle && vineTitles.indexOf(vineTitle) === -1) {
    result.push('Я не разбираюсь, попробуй что-то нейтральное: птицу или твёрдый сыр.');

    if (vines.find((vine) => vine.length < 10)) {
      result.push('Такое название фиг запомнишь! Ну и вино же ты выбрал!');
    }

    return result.join(' ');
  }

  if (vineTitle.length > 10 && vineTitle !== 'Красное вино') {
    return 'Такое название фиг запомнишь! Ну и вино же ты выбрал!'
  }

  recievedVineTitles = vineTitle;

  switch (vineTitle) {
    case 'Бордо':
      return 'Camembert'
    case 'Moscatel':
      return 'Неважно! Главное, добавь кота, кресло или собаку, и камин!'
    case 'Carmenere':
      return 'Не ищи особой закуски. Любой ужин будет с ним еще лучше!'
    case 'Красное вино':
      return 'Тортик! Не, ну а чё!'
    case '':
      return '...'
  }

  return '';
}
