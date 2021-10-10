reason1 = ""
reason2 = ""
currentPrice = 0

function getPriceTicket(currentPrice, reason1, reason2){
    if ( (reason1 === "Длительная гроза" || reason2 === "Лето, солнце") && (reason2 === "Длительная гроза" || reason1 === "Лето, солнце")){

        return("Не может быть одновременно солнце и длительная гроза.")
    }

    if (reason1===reason2){
        return("Стой!Ты выбрал два одинаковых условия.")
    }

    if (reason1===reason2===""){
        return("Отлично, цена не увеличена.")
    }

    if (reason1 === "Длительная гроза" || reason2 === "Длительная гроза"){
        currentPrice = currentPrice * 1.2;
        return("Самолет промок. Цена билета увеличина на 20%. ")
    }
    if (reason1 === "Лето, солнце" || reason2 === "Лето, солнце"){
        currentPrice = currentPrice * 1.4;
        return("Все хотят в отпуск. Цена билета увеличина на 40%. ")
    }
    if (reason1 === "Рейс с питанием" || reason2 === "Рейс с питанием"){
        currentPrice = currentPrice * 1.05;
        return("Еда стоит денег. Цена билета увеличина на 5%. ")
    }

    if (reason1 === "Самолет с широкими креслами" || reason1 === "Самолет с широкими креслами"){
        currentPrice = currentPrice * 1.07;
        return("За комфорт надо платить. Цена билета увеличина на 7%. ")
    }
        return("Итого цена билета:", currentPrice)
}