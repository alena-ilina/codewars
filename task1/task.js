let recievedVineTitles = '';
const vineTitles = ['Бордо', 'Bordeaux', 'Moscatel', 'Carmenere', 'Красное вино']

function chooseAppetites(vineTitle) {
  let result = [];

  if (recievedVineTitles === vineTitle) {
    return 'Ты меня уже спрашивал, забыл что ли?'
  }

  const vines = vineTitle.split(',');

  if (vines.length > 1) {
    result.push('Давай по очереди. Сначала про одно вино спросишь, потом про другое.');

    if (vines.find((vine) => vine.length > 10)) {
      result.push('Такое название фиг запомнишь! Ну и вино же ты выбрал!');
    }

    return result.join(' ');
  }

  if (vineTitle && vineTitle !== 'Сыр' && vineTitles.indexOf(vineTitle) === -1) {
    result.push('Я не разбираюсь, попробуй что-то нейтральное: птицу или твёрдый сыр.');

    if (vines.find((vine) => vine.length > 10)) {
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
      return 'Камамбер'
    case 'Bordeaux':
      return 'Camembert'
    case 'Moscatel':
      return 'Не важно! Главное, добавь кресло, кота или собаку, и камин!'
    case 'Carmenere':
      return 'Не ищи особой закуски. Любой ужин будет с ним ещё лучше!'
    case 'Красное вино':
      return 'Так из тебя эстета не сделаешь. Нужно знать сорт винограда. Изучи на бутылке!'
    case 'Сыр':
      return 'Мы по вину подсказываем закуски, а не наоборот.'
    case '':
      return 'Истина в вине, а не в тишине.'
  }

  return '';
}
