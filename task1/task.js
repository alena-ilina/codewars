const recievedVineTitles = []
const vineTitles = ['Бордо', 'Bordeaux', 'Moscatel', 'Carmenere', 'Красное вино']
function chooseAppetites(vineTitle) {
  if (vineTitles[length - 1] === vineTitle) {
    return 'Ты меня уже спрашивал, забыл что ли?'
  }

  if (vineTitle.length > 10 && vineTitle !== 'Красное вино') {
    return 'Такое название фиг запомнишь! Ну и вино же ты выбрал!'
  }

  if (vineTitle && vineTitle !== 'Сыр' && vineTitles.indexOf(vineTitle) === -1) {
    return 'Я не разбираюсь, попробуй что-то нейтральное: птицу или твёрдый сыр'
  }

  vineTitles.push(vineTitle)
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
      return 'Мы по вину подсказываем закуски, а не наоборот'
    case '':
      return 'Истина в вине, а не в тишине'
  }

  return '';
}
