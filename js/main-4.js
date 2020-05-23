// 1 Задача: Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
let str = '26426';
let sun = 0;
for(let i = 0; i<str.length; i++){ 
    sun = sun + Number(str[i]);   
}
console.log(sun);

// Дана строка и символ. Удвоить каждое вхождение заданного символа в строку. (Функция не чувствительна к регистру символа)

let string = 'Мстители финал';
let string2 ='';
function doNewString(phrasa, symb){
    let string2 ='';
    let symbl2 = 0;
    for(let i = 0; i < phrasa.length; i++){
        if(phrasa[i].toLowerCase() == symb.toLowerCase()){
            symbl2=phrasa[i];
            string2= string2 + symbl2;
        }
        string2+=phrasa[i];
    }
   console.log(string2);
}

doNewString(string, 'м');

/*3 Задача: Проверить что введенный пароль удовлетворяет следующим условиям сложности: 
    -длинна от 9 символов;
    - содержит обязательно английские буквы верхнего и нижнего регистра;
    - содержит более двух цифр;
    - содержит обязательно один из неалфавитных символов (например, !, $, #, %).*/

let btnPassword = document.querySelector('.btn-password');

let inputPassword = document.querySelector('.input__password');
let error = document.querySelector('.error');
let success = document.querySelector('.success');
let regAl = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
let regNum = /\d/g;  

let regSym = /(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]/;

inputPassword.addEventListener('focus', function(){
    error.classList.remove('active-error');
    success.classList.remove('active-error');
});

btnPassword.addEventListener('click', function(e){
    e.preventDefault();
    let errorText = '';
    let numArr = inputPassword.value.match(regNum);
    if(inputPassword.value.length<9){
        showMessege(error,'Пароль слишком короткий')
        console.log(inputPassword.value)
    }else if(regAl.test(inputPassword.value)==false){
        showMessege(error,'Ваш пароль должен содержать английские буквы верхнего и нижнего регистра')
        console.log(inputPassword.value)
    }else if(numArr.length<3){
        showMessege(error,'Ваш пароль должен содержать более двух цифр')
        console.log(inputPassword.value)
    }else if(regSym.test(inputPassword.value)==false){
        showMessege(error,'Ваш пароль должен содержать один из неалфавитных символов (например, !, $, #, %).*/')
        console.log(inputPassword.value)
    }else{
        showMessege(success,'Вы успешно вошли!!!')
    }
})
function showMessege(tag, messege){
    tag.innerHTML = messege;
    tag.classList.add('active-error'); 
}

// Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье". Пользователь вводит слово из словаря с одной перепутанной буквой, например: "Срида". Написать программу, которая позволяет с использованием регулярного выражения найти в строке-словаре введённое пользователем слово (не смотря на одну ошибку в слове) и вывести исправленное слово пользователю, например: "Среда". reg.test(word1)

let dictionary = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'кот', 'кит','тот','адрес'];
let btnSerch = document.querySelector('.btn-serch');



btnSerch.addEventListener('click', function(e){
    e.preventDefault();
    let input = document.querySelector('.input__text').value;
    let resultSpan = document.querySelector('.result__text');
    input = input.toLowerCase();
    checkWold(dictionary, input, resultSpan);
})

function checkWold(dictionary, word,span){
    let array = [];
    let n = 0; 
    let word1='';
    let word2 = '';
    for(let i = 0; i<dictionary.length; i++){
        let word1 = dictionary[i].toLowerCase(); 
        n=word1.length
        if(word.length >= word1.length-1 && word.length <= word1.length+1){
            for(let j = 0; j<word.length; j++){
                 let reg = new RegExp(`(?=.*)${word[j]}`,"g");
                 let sim = word1[j];
                 if(reg.test(sim)){
                     n = n - 1;
                }
            }
            if(n==1 || n==0){
                word2=word1;
                array.unshift(word1);
            }else if(n==2){
                word2=word1;
                array.push(word2);             
            }
    }
}
    if(array.length == 0){
        span.innerHTML = 'совпадений не найдено'
    }else{
        console.log(array);
        let str = '';
        for(let i = 0; i < array.length; i++){
                str = str + array[i]+', ';
          }  
        span.innerHTML = `Возможно вы искали ${str}`
      }  
 }


