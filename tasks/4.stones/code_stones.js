let countWin1 = 0
let countWin2 = 0

function getCountWin(win1, win2) {
  countWin1 = countWin1 + win1
  countWin2 = countWin2 + win2

  if (countWin1 === 3 || countWin2 === 3) {
    const result = `Игра завершена cчет ${countWin1}:${countWin2}`
    countWin1 = 0
    countWin2 = 0
    return result
  }
  return `Счет ${countWin1}:${countWin2}`
}

function getWin(person1, person2) {
  if (person1 === "ножницы" && person2 === "бумага") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Ножницы режут бумагу`
  }

  if (person1 === "бумага" && person2 === "камень") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Бумага покрывает камень`
  }

  if (person1 === "камень" && person2 === "ящерица") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Камень давит ящерицу`
  }

  if (person1 === "ящерица" && person2 === "спок") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Ящерица отравляет спока`
  }

  if (person1 === "спок" && person2 === "ножницы") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Спок ломает ножницы`
  }

  if (person1 === "ножницы" && person2 === "ящерица") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Ножницы обезглавливают ящерицу`
  }

  if (person1 === "ящерица" && person2 === "бумага") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Ящерица съедает бумагу`
  }

  if (person1 === "бумага" && person2 === "спок") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Бумага подставляет спока`
  }

  if (person1 === "спок" && person2 === "камень") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Спок испаряет камень`
  }

  if (person1 === "камень" && person2 === "ножницы") {
    const countResult = getCountWin(1, 0)
    return `${countResult} Камень разбивает ножницы`
  }
}