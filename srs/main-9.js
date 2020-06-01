'use strict'
import {myUtils} from "./module.js";
/* 1 Задача:  Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.Библиотека должна обладать следующими методами: - поиск минимального элемента в переданном массиве; - поиск максимально элемента в переданном массиве; - расчет среднего арифметического значения элементов переданного массива; - создание копии (клонирование) переданного массива.*/


let arr = [12, 23, 45, 0, 17, -10, -13];

console.log(myUtils.findeMaxNumber(arr));
console.log(myUtils.findeMinNumber(arr));
console.log(myUtils.calculateArithmeticMean(arr));
console.log(myUtils.cloneArr(arr));

/*
Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x<1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции.
*/


let x = [];
let y = [];

for(let i = -5; i < 5; i=i+0.01){
    x.push(i.toFixed(2));
}

let findY = function(x){
    let y = 0;
    if( x>=1 ){
      y = 5/x  
    } else if ( x < 1){
        y = (x * x) - (4 * x)
    }
    return y.toFixed(2)
};

for(let i = 0; i< x.length; i++){
    let a = findY(x[i]);
    y.push(a);
};

let traceA = {
    x: x,
    y: y,
};


let data = [traceA];

let layout = {
    title: 'График',
    yaxis:{range:[-50,50]}, 
    xaxis:{range:[-5,5]},
    width: 600,
    height: 500,
};

let TESTER = document.getElementById('tester');
	Plotly.newPlot(TESTER, data, layout);

/* 4 Задача:  Написать функцию генерации поля n x n (значение n - аргумент функции), в ячейки рандомно спрятать несколько призов. Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз (иконка, изменения цвета и тд), либо иконка, сообщающая, что приза нет. Количество оставшихся попыток выводим рядом с игровым полем.*/

let divWrap = document.querySelector('.wrapper');
let attemps = document.querySelector('.attemps');
let prizes = ['Машина', 'Путешествие', '100000 руб', 'дом' ];
let count = 0;
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function createTable(n){
    let randNumber = 0;
    let table = document.createElement('table');
    for(let i = 1; i <= n; i++){
        let tr = document.createElement('tr');
        for(let j = 1; j <= n; j++){
            randNumber = randomInteger(0, 4);
            let td = document.createElement('td');
            td.classList.add('td__bg');
            if(randNumber==1){ 
              td.classList.add('prize');
              let a = randomInteger(0, prizes.length-1);
              td.innerText = prizes[a];
             } 
            tr.appendChild(td);  
        }
        table.appendChild(tr)
    }
    divWrap.appendChild(table);
}

createTable(8);

divWrap.addEventListener('click', function(e){
    let elem = e.target;
    if(elem.tagName == 'TD' && count<3 && !(elem.classList.contains('win')) && !(elem.classList.contains('luze'))){    
        count = count+1;
        attemps.innerText = count;
        if(elem.classList.contains('prize')){
            elem.classList.add('win')
        } else {
            elem.classList.add('luze')
        }

    } else{
        attemps.innerText = `Вы потратили все попытки`;
    }
})

/*5 Задача:   Написать функцию, которая будет осуществлять сортировку таблицы из  предыдущего дз по значениям столбца при нажатии на название этого столбца.*/

let products = [
    {
        title:'451° по Фаренгейту',
        author:'Рей Брэдбери',
        description: '451° по Фаренгейту – температура, при которой воспламеняется и горит бумага. Философская антиутопия Брэдбери рисует беспросветную картину развития постиндустриального общества: это мир будущего, в котором все письменные издания безжалостно уничтожаются специальным отрядом пожарных, а хранение книг преследуется по закону, интерактивное телевидение успешно служит всеобщему оболваниванию, карательная психиатрия решительно разбирается с редкими инакомыслящими, а на охоту за неисправимыми диссидентами выходит электрический пес… Роман, принесший своему творцу мировую известность.',
        itemGoods: '978-5-04-102293-8',
        
    },
    {
        title:'Три товарища',
        author:'Ремарк Эрих Мария',
        description: 'Самый красивый в двадцатом столетии роман о любви… Самый увлекательный в двадцатом столетии роман о дружбе… Самый трагический и пронзительный роман о человеческих отношениях за всю историю двадцатого столетия',
        itemGoods: '378-5-04-100693-8',     
    },
   {
        title:'Над пропастью во ржи',
        author:'Джером Д. Сэлинджер',
        description: 'Писатель-классик, писатель-загадка, на пике своей карьеры объявивший об уходе из литературы и поселившийся вдали от мирских соблазнов в глухой американской провинции. Единственный роман Сэлинджера, НАД ПРОПАСТЬЮ ВО РЖИ стал переломной вехой в истории мировой литературы. И название романа, и имя его главного героя Холдена Колфилда сделались кодовыми для многих поколений молодых бунтарей от битников и хиппи до современных радикальных молодежных движений. Культовый роман ХХ века в блестящем переводе Риты Райт-Ковалевой, ставшем классикой переводческого искусства.',
        itemGoods: '118-9-04-102293-0',
        
    },
    {
        title:'Портрет Дориана Грея',
        author:'Оскар Уайльд',
        description: '«Портрет Дориана Грея» – одно из величайших произведений последних полутора столетий, роман, который пытались запретить, а автора осуждали за «непристойное поведение». Превращение прекрасного и невинного юноши Дориана в чудовище под влиянием гедонистических идей и циничных афоризмов лорда Генри – в романе, породившем культ вечной молодости.',
        itemGoods: '378-5-04-100693-8',     
    },
    {
        title:'Маленький принц',
        author:'Антуан де Сент-Экзюпери',
        description: 'Маленький принц — аллегорическая повесть, наиболее известное произведение Антуана де Сент-Экзюпери.Рисунки в книге выполнены самим автором и не менее знамениты, чем сама книга. Важно, что это не иллюстрации, а органическая часть произведения в целом: сам автор и герои сказки всё время ссылаются на рисунки и даже спорят о них. Уникальные иллюстрации в «Маленьком принце» разрушают языковые барьеры, становятся частью универсального визуального лексикона, понятного каждому.«Ведь все взрослые сначала были детьми, только мало кто из них об этом помнит» — Антуан де Сент-Экзюпери, из посвящения к книге.',
        itemGoods: '908-4-04-100693-8',     
    },

]

let wrapBlock = document.querySelector('.books_block');
function renderProducts(arr){
    
    let trTitle = document.createElement('tr');
    trTitle.innerHTML = `<th>№</th><th data-art="title">Название</th><th data-art="author">Автор</th><th data-art="description">Описание</th><th data-art="itemGoods">Артикул</th>`;
    wrapBlock.appendChild(trTitle);
    for(let i = 0; i < arr.length; i++){
       let tr = document.createElement('tr'); 
       tr.innerHTML = `<td>${i+1}</td><td>${arr[i].title}</td><td>${arr[i].author}</td><td class="description">${arr[i].description}</td><td>${arr[i].itemGoods}</td>`;
       wrapBlock.appendChild(tr);
    }
}

renderProducts(products);

wrapBlock.addEventListener('click', sortTable);

function sortTable(e){
    let elemTarget = e.target;
    if(elemTarget.tagName=='TH'){
        let value = elemTarget.getAttribute('data-art');
        
        if(value!=null){
        products.sort(function(item1, item2){
            if(item1[value] > item2[value]){
                return 1;
            }
            if(item1[value] < item2[value]){
                return -1;
            }
            return 0
        });
        this.innerText = '';
        renderProducts(products)
        } 
    }
} 
 