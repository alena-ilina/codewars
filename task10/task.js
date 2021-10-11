countWin1=0
countWin2=0

function getCountWin(win1,win2){
    countWin1 = countWin1 + win1
    countWin2 = countWin2 + win2
    if (countWin1 === 3 || countWin2 === 3){
        countWin1_1 = countWin1
        countWin2_2 = countWin2
        countWin1 = 0
        countWin2 = 0
        return ("Игра завершена cчет ", countWin1, ":", countWin2)
    }
    return ("Счет ", countWin1, ":", countWin2)
}

function getWin(person1,person2)
{
    if(person1==="ножницы" && person2==="бумага")
    {
        getCountWin(1,0)
        return " Ножницы режут бумагу"
    }

    if(person1==="бумага" && person2==="камень")
    {
        getCountWin(1,0)
        return " Бумага покрывает камень"
    }

    if(person1==="камень" && person2==="ящерица")
    {
        getCountWin(1,0)
        return " Камень давит ящерицу"
    }

    if(person1==="ящерица" && person2==="спок")
    {
        getCountWin(1,0)
        return " Ящерица отравляет спока"
    }

    if(person1==="спок" && person2==="ножницы")
    {
        getCountWin(1,0)
        return " Спок ломает ножницы"
    }

    if(person1==="ножницы" && person2==="ящерица")
    {
        getCountWin(1,0)
        return " Ножницы обезглавливают ящерицу"
    }

    if(person1==="ящерица" && person2==="бумага")
    {
        getCountWin(1,0)
        return " Ящерица съедает бумагу"
    }

    if(person1==="бумага" && person2==="спок")
    {
        getCountWin(1,0)
        return " Бумага подставляет спока"
    }

    if(person1==="спок" && person2==="камень")
    {
        getCountWin(1,0)
        return " Спок испаряет камень"
    }

    if(person1==="камень" && person2==="ножницы")
    {
        getCountWin(1,0)
        return " Камень разбивает ножницы"
    }
}