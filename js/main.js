// Задача первая На садовом участке площадью 10 соток, разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?
let length = 25;
let width = 15;
let acreage = 10*100;
let totalSun = length*width;
let resulte = acreage%totalSun;
let answer_1 = document.querySelector('.answer_1');

answer_1.innerHTML = resulte;

// Задача Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.
let smallCircleSm = 600;
let smallCircle = smallCircleSm/100;
let bigCircle = 15;
resulteCircle = bigCircle-smallCircle;
let answer_2 = document.querySelector('.answer_2');

answer_2.innerHTML = resulteCircle;

// Задача  Из трех данных чисел выбрать наименьшее.

let btn = document.querySelector('.btn');

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    let a = Number(document.querySelector('.number_1').value);
    let b = Number(document.querySelector('.number_2').value);
    let c = Number(document.querySelector('.number_3').value);
    if(a || a==0 && b || b==0 && c || c==0){
        let MinNumber = Math.min(a, b, c)
        let answer_3 = document.querySelector('.answer_3');
        answer_3.innerHTML = MinNumber;
    } else{
        let answer_3 = document.querySelector('.answer_3');
        answer_3.innerHTML ="Введите число";
    }  
});

// Задача:Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n. Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.

let btn_2 = document.querySelector('.btn-2');

btn_2.addEventListener('click', function(e){
    e.preventDefault();
    
    let m = Number(document.querySelector('.number-1').value);
    let n = Number(document.querySelector('.number-2').value);
    let number = 10;
    
    if(m || m==0 && n || n==0){
        let balanse_1 = Math.abs(number-m);
        let balanse_2 = Math.abs(number-n);
        if(balanse_1==balanse_2){
            let answer_4 = document.querySelector('.answer_4');
            answer_4.innerHTML = 'Одинаково близки';
        }else{
            let result_4 = (balanse_1>balanse_2)?n:m;
            let answer_4 = document.querySelector('.answer_4');
            answer_4.innerHTML = result_4;
        }
        
     }else{
        let answer_4 = document.querySelector('.answer_4');
        answer_4.innerHTML ="Введите число";
    }  
});


// Задача:Трёхмерное пространство: Есть три вершины a, b и с. У каждой вершина заданы координатами x, y, z как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
 
/*
пример координат прямоугольного треугольника
let Ax=-3;
let Ay=-2;
let Az=0;

let Bx=0;
let By=-1;
let Bz=0;

let Cx=-2;
let Cy=5;
let Cz=0;
*/

checkTriangle(-3,-2,2,0,-1,0,-2,5,0); //функция проверяющая являеться ли треугольник прямоугольным. Ответ выводиться на страницу HTML

function checkTriangle(Ax,Ay,Az,Bx,By,Bz,Cx,Cy,Cz){
    let AC =((Cx-(Ax))**2)+((Cy-(Ay))**2)+((Cz-(Az))**2);
    let AB =((Bx-(Ax))**2)+((By-(Ay))**2)+((Bz-(Az))**2);
    let BC =((Cx-(Bx))**2)+((Cy-(By))**2)+((Cz-(Bz))**2);

    let sun = null;

    let answer_5 = document.querySelector('.answer_5');

    if(BC>AB && BC>AC){
        sun = (BC == (AC+AB))?true:false;
    } else if(AC>AB && AC>BC){
        sun = (AC ==(BC+AB))?true:false;
    } else if(AB>AC && AB>BC){
        sun = (AB ==(BC+AC))?true:false;
    }

    sun?answer_5.innerHTML ="Треугольник является прямоугольным":answer_5.innerHTML ="Треугольник не является прямоугольным";
     

}




        

    

