const products = {
  soup: {
    kkal: 0.2,
    lev: 'main'
  },
  navalPasta: {
    kkal: 0.8,
    lev: 'main'
  },
  grandmasPilaf: {
    kkal: 1.2,
    lev: 'main'
  },
  broccoli: {
    kkal: -0.5,
    lev: 'main'
  },
  chickenBreast: {
    kkal: 0.1,
    lev: 'main'
  },
  chakhokhbili: {
    kkal: 0.7,
    lev: 'main'
  },
  caesarSalad: {
    kkal: 0.8,
    lev: 'main'
  },
  cabbageRolls: {
    kkal: 0.6,
    lev: 'main'
  },
  cake: {
    kkal: 1.5,
    lev: 'desserts'
  },
  compote: {
    kkal: 1,
    lev: 'desserts'
  },
  coffeWithSugar: {
    kkal: 0.3,
    lev: 'desserts'
  },
  cocaCola: {
    kkal: 0.9,
    lev: 'desserts'
  },
  lazyВumplings: {
    kkal: 1.6,
    lev: 'extra'
  },
  dumplingsWithSourCream: {
    kkal: 1.3,
    lev: 'extra'
  },
  carrotСutlets: {
    kkal: 0.5,
    lev: 'extra'
  },
  pemmican: {
    kkal: 0.2,
    lev: 'extra'
  },
}

// const mainProducts = {
//   soup: 0.2,
//   navalPasta: 0.8,
//   grandmasPilaf: 1.2,
//   broccoli: -0.5,
//   chickenBreast: 0.1,
//   chakhokhbili: 0.7,
//   caesarSalad: 0.8,
//   cabbageRolls: 0.6,
// }

// const desserts = {
//   cake: 1.5,
//   compote: 1,
//   coffeWithSugar: 0.3,
//   cocaCola: 0.9,
// }

// const extra = {
//   lazyВumplings: 1.6,
//   dumplingsWithSourCream: 1.3,
//   carrotСutlets: 0.5,
//   pemmican: 0.2
// }

const exerciseTypes = ['walk', 'run', 'plank', 'tabata', 'squats']

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function chooseExercise(eatenFoods) {
  let result = '';
  let kkal = 0;
  let notDesserts = 0;
  let sumWeight = 0

  if (!eatenFoods || isEmpty(eatenFoods)) {
    return `Тренировки натощак выматывают, выбери хотя бы один продукт`
  }

  for (item in eatenFoods) {
    if (products[item].lev === 'main' || products[item].lev === 'extra') {
      notDesserts = notDesserts + 1
    }
    if (eatenFoods[item] <= 0) result = 'Так мало не ела даже Дюймовочка'
    kkal += products[item].kkal * eatenFoods[item]
    sumWeight += eatenFoods[item]
  }

  if (notDesserts === 0) result = 'Куда-то нужно потратить всю эту энергию, отправляйся на 45-минутную пробежку” (Бег 45 минут)'

  if (result) return result

  // 2 след.условия взаимоисключающие
  if (sumWeight > 3000) return '“Кажется, в твоем животе слишком много еды для тренировок. Отдохни и приходи в зал завтра” (0 минут, пустой список)'

  if (kkal < 2000) return '“Ура, день отдыха! Сходи на двухчасовую прогулку в соседний парк” (Прогулка 120 минут)'

  if (kkal > 4000) return '“Любишь покушать - люби и бёрпи поделать. 60 минут веселья и табаты” (Табата 60 минут)'

  if (kkal <= 4000 && kkal >= 2000) return '“Мы за разнообразие в еде и тренировках! Выполни 15 минут приседаний, 4 минуты планки и 20 минут бега” (Приседания 15 минут, Планка 4 минуты, Бег 20 минут)'

  // if (timeFromBreakfast === undefined || doneWorkTasks === undefined || !appetise) {
  //   return 'Не могу посчитать обеды!'
  // }

  // if (typeof timeFromBreakfast !== 'number' || typeof doneWorkTasks !== 'number' || typeof appetise !== 'string') {
  //   return 'Ничего не понимаю. Кажется, сбой в программе'
  // }

  // if (isNaN(timeFromBreakfast) || isNaN(timeFromBreakfast)) {
  //   return 'Ничего не понимаю. Кажется, сбой в программе'
  // }

  // if (timeFromBreakfast % 1 !== 0 || doneWorkTasks % 1 !== 0) {
  //   return 'Количество рабочих задач и время после завтрака должны быть натуральными числами'
  // }

  // if (appetise !== 'poor' && appetise !== 'healthy' && appetise !== 'brutal') {
  //   return 'Прости, не знаю такого аппетита'
  // }

  // if (timeFromBreakfast > 24 || timeFromBreakfast < 0) {
  //   return 'Ты что! В сутках всего 24 часа!'
  // }

}