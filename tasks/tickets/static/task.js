function getPriceTicket(currentPrice, reason1, reason2) {
  result = "";

  if ((reason1 === "Длительная гроза" && reason2 === "Лето, солнце") || (reason2 === "Длительная гроза" && reason1 === "Лето, солнце")) {
    return "Не может быть одновременно солнце и длительная гроза"
  }

  if (reason1 === "" && reason2 === "") {
    return `Отлично, цена не увеличена. Итого цена билета:${currentPrice}`
  }

  if (reason1 === reason2) {
    return "Стой!Ты выбрал два одинаковых условия"
  }

  if (reason1 === "Длительная гроза" || reason2 === "Длительная гроза") {
    currentPrice = currentPrice * 1.2;
    result = `Самолет промок. Цена билета увеличена на 20%`
  }

  if (reason1 === "Лето, солнце" || reason2 === "Лето, солнце") {
    currentPrice = currentPrice * 1.4;
    result = `${result ? `${result}. ` : ''}Все хотят в отпуск. Цена билета увеличена на 40%`
  }

  if (reason1 === "Рейс с питанием" || reason2 === "Рейс с питанием") {
    currentPrice = currentPrice * 1.05;
    result = `${result ? `${result}. ` : ''}Еда стоит денег. Цена билета увеличена на 5%`
  }

  if (reason1 === "Самолет с широкими креслами" || reason2 === "Самолет с широкими креслами") {
    currentPrice = currentPrice * 1.07;
    result = `${result ? `${result}. ` : ''}За комфорт надо платить. Цена билета увеличена на 7%`
  }

  return `${result}. Итого цена билета:${currentPrice}`
}