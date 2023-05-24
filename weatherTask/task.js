/* Код определяет, какая погода "ощущается"
в зависимости от переданных параметров. Перепиши код так, 
чтобы все тесты в соседнем файле прошли успешно
и котик получил свой клубок. Удачи!
*/

let reason = {
  "degrees":0,
  "wet":0,
  "wind":0,
  "cloudy":0
};

let finalTemperature = 0;

function getFeelingTheeWeather(reason){
    if(reason["degrees"] <= -100){
        return("В такую погоду люди дома сидят, телевизор смотрят.")
    }

    if(70 <= reason["degrees"]){
        return("Cлишком жарко, и ощущается также.")
    }

    finalTemperature = reason["degrees"];
    if(reason["degrees"] <= 15) {
        if(reason["wet"] <= 34)
        { finalTemperature =  finalTemperature + 1}
        if(reason["wet"] <= 49 && reason["wet"] >= 35)
        { finalTemperature =  finalTemperature }
        if(reason["wet"] <= 69 && reason["wet"] >= 50)
        { finalTemperature =  finalTеmperature - 1}
        if(reason["wet"] <= 100 && reason["wet"] >= 70)
        { finalTemperature =  finalTemperature - 3}

        if(reason["wind"] <= 8)
        { finalTemperature =  finalTemperature }
        if(reason["wind"] <= 13 && reason["wind"] >= 9)
        { finalTemperature =  finalTemperature - 1}
        if(reason["wind"] <= 20 && reason["wind"] >=14)
        { finalTemperature =  finalTemperature - 2}
        if(reason["wind"] <= 100 && reason["wind"] >= 21)
        { finalTemperature =  finalTemperature - 3}

        if(reason["cloudy"] <= 10 && reason["cloudy"] >=0)
        { finalTemperature =  finalTemperature + 2 }
        if(reason["cloudy"] <= 40 && reason["cloudy"] >=11)
        { finalTemperature =  finalTemperature +1 }
        if(reason["cloudy"] <= 100 && reason["cloudy"] >=41)
        { finalTemperature = finalTemperature}
        if(reason["cloudy"] === undefined)
        { return "Кажется ты забыл передать какой-то параметр"}
    }
    if( 16 <= reason["degrees"] ) {
        if(reason["wet"] <= 49)
        { finalTemperature =  finalTemperature }
        if(reason["wet"] <= 69 && reason["wet"] >= 50)
        { finalTemperature =  finalTemperature + 1 }
        if(reason["wet"] <= 100 && reason["wet"] >= 70)
        { finalTemperature =  finalTemperature + 2}

        if(reason["wind"] <= 8)
        { finalTemperature =  finalTemperature + 1 }
        if(reason["wind"] <= 20 && reason["wind"] >= 9)
        {  finalTemperature =  finalTemperature - 1 }
        if(reason["wind"] <= 100 && reason["wind"] >= 21)
        { finalTemperature = finalTemperature - 2}

        if(reason["cloudy"] <= 10 && reason["cloudy"] >= 0)
        { finalTemperature += finalTemperature + 4}
        if(reason["cloudy"] <= 40 && reason["cloudy"] >= 11)
        { finalTemperature =  finalTemperature + 3}
        if(reason["cloudy"] <= 70 && reason["cloudy"] >= 41)
        { finalTemperature =  finalTemperature + 2}
        if(reason["cloudy"] <= 100 && reason["cloudy"] >= 71)
        { finalTemperature =  finalTemperature }
    };

    const result = `Ощущается как ${finalTemperature}`
    return result
}
