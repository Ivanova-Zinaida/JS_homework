// 1 Задача: Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и возвращает true, если массивы равны и false, если не равны. 
let array_1 = ['Дом','Сом', 'Лен', 'Дым',12];
let array_2 = ['Дом','Сом', 'Лен', 'Дым',13];

function checkArray(array_1, array_2){
    let result = false;
    if(array_1.length==array_2.length){
        let n = 0;
        for(let i = 0; i < array_1.length; i++){
            if(array_1[i]==array_2[i]){
                n=n+1;
            }
            else{
                n = n;
            }
        }
    (n==array_1.length)?result = true: result = false;
    return result;
    }else{
         resulte=false;
         
    }
    return result;
}
console.log(checkArray(array_1, array_2))
;

//  Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива. Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].

function makeArray(start, end, step=1){
    let array = [];
    for(let i = start; i<=end; i=i+step){
        array.push(i);
    }
    return array;
}

console.log(makeArray(1, 10,3));

//  Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения. Написать отдельную функцию, которой передается объект студент, а она выводит его содержимое.

let student={
    name:'Зинаида',
    lastName:'Иванова',
    age:31,
    hobby:['Психология','Волейбол', 'Путешествия','Книги','Театр','Кино', 'Программирование'],
    university:'ITMO',
}
function showObj(student){
    let table = document.querySelector('.table');
    for (let i in student){ 
        if(Array.isArray(student[i])){ 
            let tr = document.createElement('tr');
            let hobby = student[i];
            let str ='';
            hobby.forEach(function(item,i){       
                str +=`${i+1}. ${item}</br>`;     
            })   
        let td = `<td>${i}</td>${str}</td>`;
        tr.innerHTML= td;
        table.append(tr);
        }else{
            let tr = document.createElement('tr');
            let  td =`<td>${i}</td><td>${student[i]}</td>`;
            tr.innerHTML= td;
            table.append(tr);
        }
    }
}

showObj(student);

/*
Написать генератор случайных “русских слов”. Сформировать слово используя правила:
- определить длину слова случайно, но в диапазоне от 3 до 5 букв;
- начинать слово с гласной или согласной (определить случайно);
- чередовать гласные и согласные буквы в слове;
- буквы выбираются случайно.*/

let btnWord = document.querySelector('.btn-word');

btnWord.addEventListener('click', function(e){
    e.preventDefault();
    let resultText = document.querySelector('.result');
    makeNewWord(resultText)
})

function makeNewWord(result){
    let vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я' ];
    let consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
    let wordLendth = randomInteger(3, 5);
    let startLetter = randomInteger(0, 1);
    let word = ''
    for(let i = 0; i<wordLendth; i++){
        if(startLetter==0){
            let letter = randomInteger(0, consonants.length-1);
            word += consonants[letter];
            startLetter=1;
        }else{
            let letter = randomInteger(0, vowels.length-1);
            word += vowels[letter];
            startLetter=0; 
        }
    }
    result.innerHTML = word;
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}