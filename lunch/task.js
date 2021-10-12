function getNapoleonCake(resultString) {
  return `${resultString}. Бонус: тортик Наполеон`
}

function chooseLunch(timeFromBreakfast, doneWorkTasks, appetise) {
  let result = "";

  if (timeFromBreakfast === undefined || doneWorkTasks === undefined || !appetise) {
    return 'Не могу посчитать обеды!'
  }

  if (typeof timeFromBreakfast !== 'number' || typeof doneWorkTasks !== 'number' || typeof appetise !== 'string') {
    return 'Ничего не понимаю. Кажется, сбой в программе'
  }

  if (isNaN(timeFromBreakfast) || isNaN(timeFromBreakfast)) {
    return 'Ничего не понимаю. Кажется, сбой в программе'
  }

  if (timeFromBreakfast % 1 !== 0 || doneWorkTasks % 1 !== 0) {
    return 'Количество рабочих задач и время после завтрака должны быть натуральными числами'
  }

  if (appetise !== 'poor' && appetise !== 'healthy' && appetise !== 'brutal') {
    return 'Прости, не знаю такого аппетита'
  }

  if (timeFromBreakfast > 24 || timeFromBreakfast < 0) {
    return 'Ты что! В сутках всего 24 часа!'
  }

  if (doneWorkTasks > 100) {
    return 'Никогда не поверю, что ты за день сделал(-а) столько задач'
  }

  if (doneWorkTasks < 0) {
    return 'Даже я не могу так плохо работать'
  }

  if (doneWorkTasks === 0 && timeFromBreakfast > 2 && timeFromBreakfast < 4) {
    return 'Извини, тебе положено только кофе'
  }

  if (timeFromBreakfast > 5 && doneWorkTasks === 0 && appetise === 'brutal') {
    return 'Так уж и быть, вот твоя паста и чай'
  }

  if (timeFromBreakfast > 5 && doneWorkTasks >= 1 && appetise === 'brutal') {
    result = 'Ух, вот твой обед: борщ, плов, шарлотка, чай'

    if (doneWorkTasks === 100) {
      return getNapoleonCake(result)
    }
    return result
  }

  if (timeFromBreakfast > 0 && timeFromBreakfast < 4 && doneWorkTasks > 1 && appetise === 'poor') {
    result = 'Тебе положено сладенькое: шоколадный круассан и латте'

    if (doneWorkTasks === 100) {
      return getNapoleonCake(result)
    }
    return result
  }
}
