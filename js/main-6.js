'use strict'
/*1. Реализовать функцию foo:
let a = {
    name: 'static',
    count: 0
}
console.log(foo(a, 'count', 10));  В консоль выведет: [{name:'static', count:0},
 {name:'static', count:1}, ..., {name:'static', count:9}] */

let a = {
    name: 'static',
    count: 0
};

function foo(a,value, number){
    let arr = []  
    for(let i = 0; i < number; i++){
        let b = {};
        b = Object.assign(b, a);
        b[value] = i;
        arr.push(b);
    }
    return arr;
 }
console.log(foo(a,'count', 10));


/*Сделайте функцию, каждый вызов который будет генерировать одно случайное число от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.*/

function createNewNumber(numbers){
     let arr = [];
     function createRandomNumver(){
         if(arr.length == numbers){
             return arr;
         }
         let i = Math.floor((Math.random() * numbers) + 1)
         if(arr.includes(i)){
             return createRandomNumver()
         } else {
           arr.push(i)
         }
           return arr;
         }
      return createRandomNumver;
     }
   
let createRandomNumver = createNewNumber(100);
let arr = createRandomNumver();

function showResult(arr){
    while(arr.length<100){
        createRandomNumver();
    }
    return arr
}

console.log('Вы перебрали все доступные цифры ' + showResult(arr));

/*Построить объект студент:- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.- метод объекта выводящий в консоль биографическую справку в виде, например: «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.*/

let student={
    name:'Зинаида',
    lastName:'Иванова',
    age:31,
    hobby:['психология','волейбол', 'путешествия','книги','театр','кино', 'программирование'],
    university:'ITMO',
    sayAboutStudent: function (){
        let information = this.lastName +' ' + this.name + '. ' + this.age + ' год . ' + 'Интересы: ' + this.hobby + '. ' + 'Учится в ' + this.university + '.';
        console.log(information)
        },
    }

    student.sayAboutStudent();

/*Написать функцию вычисляющую факториал числа с использованием рекурсии. Факториал числа - это число, умноженное на себя минус один, затем на себя минус два и так далее, до единицы. Обозначается n! Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1*/


function calculateFactorial(n){
    if(n==1){
        return 1;
    }else {
        return n*calculateFactorial(n-1)
    }
 
}

console.log(calculateFactorial(5));

/*Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
определяющую порядок сортировки. Массив для тестирования: 
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];*/

let arr1 = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5},{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4}];

arr1.sort(function(item1, item2){
    return item1.price - item2.price
});

console.log(arr1);