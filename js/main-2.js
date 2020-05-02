// Задача № 1: Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название соответствующего времени года ("зима", "весна" и т.д.). 
let btnMounth = document.querySelector('.btn-mounth');
let answer1 = document.querySelector('.answer_1');


btnMounth.addEventListener('click', function(e){
    e.preventDefault();
    let inputNumberMounth = Number(document.querySelector('.input__number-mounth').value);
    console.log();
    let result = null;
    switch(true){
        case inputNumberMounth<=2||inputNumberMounth==12:
                result= 'Сейчас зима';
                break;
        case inputNumberMounth>=3&&inputNumberMounth<=5:
                result = 'Сейчаc весна';
                break;
        case inputNumberMounth>=6&&inputNumberMounth<=8:
                result = 'Сейчас лето';
                break;
        case inputNumberMounth>=9&&inputNumberMounth<=11:
                result = 'Сейчас осень';
                break;
            default:  
                result ='Возможно вы ввели недопустимо число или символ'
                console.log(inputNumberMounth);
                break;    
    }
    answer1.innerHTML=result;   
})

// Единицы длины пронумерованы следующим образом: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. Дан номер единицы длины и длина отрезка L в этих единицах (вещественное число). Вывести длину данного отрезка в метрах.

let btnLength = document.querySelector('.btn-length');
let answer2 = document.querySelector('.answer_2');

btnLength.addEventListener('click', function(e){
    e.preventDefault();
    let inputNumberLength = Number(document.querySelector('.input__number-length').value);
    let select = Number(document.querySelector('select').value);
    let result = null;
    if(select==1){
        result = inputNumberLength/10;
    } else if(select==2){
        result = inputNumberLength*1000;
    }
    else if(select==3){
        result = inputNumberLength;
    }
    else if(select==4){
        result = inputNumberLength/1000;
    }
    else if(select==5){
        result = inputNumberLength/100;
    } else{
        result = 'возможно вы ввели некоректное значение'
    }
    answer2.innerHTML=result;
})

//Задача № 3:Дано целое число, лежащее в диапазоне от -999 до 999. Вывести строку - словесное описание данного числа вида" отрицательное двузначное число", "нулевое число", "положительное однозначное число" и т.д.

let btnNumber = document.querySelector('.btn-number');
let answer3 = document.querySelector('.answer_3');

btnNumber.addEventListener('click', function(e){
    e.preventDefault();
    let inputNumber = Number(document.querySelector('.input__number').value);
    let result = null;
    switch(true){
        case inputNumber>=1&&inputNumber<=9:
                result='положительное однозначное число';
                break;
        case inputNumber>=10&&inputNumber<=99:
                result ='положительное двузначное число';
                break;
        case inputNumber>=100&&inputNumber<=999:
                result = 'положительное трезначное число';
                break;
        case inputNumber<=-1&&inputNumber>=-9:
                result = 'отрицательное однозначное число';
                break;
        case inputNumber<=-10&&inputNumber>=-99:
                result = 'отрицательное двузначное число';
                break;
        case inputNumber<=-100&&inputNumber>=-999:
                result = 'отрицательное трезначное число';
                break;
        case inputNumber==0:
                result = 'нулевое число';
                break;
            default:  
                result ='Возможно вы ввели недопустимо число или символ'
                break;    
    }
    answer3.innerHTML=result;   
})

// Задача № 4:Вывести через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, а для чисел, делящихся на 5 (но не на 3) – ‘Five’. Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5. 

for(i=1; i<=100; i++){
    let j = i
    if(i%3==0){
        j='three'
    } else if(i%5==0){
        i%3==0?j='tree':j='five'
    }
    console.log(j);
}
console.log('второй вывод с ThreeFive')
for(i=1; i<=100; i++){
    let j = i
    if(i%3==0&&i%5==0){
        j='ThreeFive'
    }
    console.log(j);
}

// Задача № 5:Пользователь вводит год, необходимо определить является ли он високосным. Примеры данных для тестирования: 1) '2000' – високосный год 2) '1800' – не високосный год
let btnYear = document.querySelector('.btn-year');
let answer5 = document.querySelector('.answer_5');

btnYear.addEventListener('click', function(e){
    e.preventDefault();
    let result = null;
    let inputYear = document.querySelector('.input__year').value;
    if(inputYear%4==0){
        if(inputYear%100==0){
            inputYear%400==0? result = 'год високосный':result = 'не високосный год'
        }else{
            result = 'год високосный';   
        }
        answer5.innerHTML = result;   
    } else {
        result = 'не високосный год';
        answer5.innerHTML = result;
    }   
});

// Задать количество тарелок и количество моющего средства. Моющее средство расходуется из расчета 0,5 на одну тарелку. В цикле выводить сколько моющего средства осталось после мытья каждой тарелки. В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.

let btnClean = document.querySelector('.btn-clean');
let numberPlate = document.querySelector('.answer_plate');
let numberDetergent = document.querySelector('.answer_detergent');

btnClean.addEventListener('click', function(e){
    e.preventDefault();
    let inputPlate = document.querySelector('.input__plate').value;
    let inputDetergent = document.querySelector('.input__detergent').value;
    let resultPlate = null;
    for(let i=inputPlate; i>=0; i--){
        if(inputDetergent==0){
            break;
        }
        inputDetergent-=0.5;
        resultPlate = i
    }
    numberPlate.innerHTML = resultPlate;
    numberDetergent.innerHTML = inputDetergent;
});
