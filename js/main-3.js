// 1. Заданы два массива A = [ 12, 4, 3, 10, 1, 20 ]  B = [-3, -7, -100, -33] необходимо их объединить в один массив C добавив массив B в конец(в начало) A.
let A = [ 12, 4, 3, 10, 1, 20 ];
let B = [-3, -7, -100, -33];
for(let i = 0; i < B.length; i++){
    A.push(B[i]);
}
console.log(A);

// Одномерным массивом. задана доска 3 на 3. var area = [ null, null, null, null, null, null, null, null, null ] Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. При появлении в массиве 0-ля рисовать нолик , 1-цы крестик Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.

let area = [ 1, null, 0, null, 1, null, null, null, null ];

let container = document.querySelector('.container-table');
let table = document.createElement('table');

for (let i = 0; i < 3; i++) { 
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) { 
        let td = document.createElement('td');
        tr.append(td);
        table.append(tr);
    };
};

container.append(table);

let td = document.querySelectorAll('td');

for (let i = 0; i < area.length; i++){
    if (area[i]==0) {
        td[i].innerHTML ='O';
    } else if (area[i]==1) {
        td[i].innerHTML = 'X';
    } else {
        td[i].innerHTML = ' ';
    }; 
};

// 3. Задан массив  - [12,4,3,10,1,20]. Удалить из него наименьшее и наибольшее значение.
let area_3 = [12,4,3,10,1,20];
let minNumber = area_3[0];
let maxNumber = area_3[0];
let countMin = 0;
let countMax = 0;

for(let i = 0; i < area_3.length; i++){
    if(minNumber>area_3[i]){
        minNumber = area_3[i];
        countMin = i;
     }
}
area_3.splice(countMin, 1);

for(let i = 0; i < area_3.length; i++){
    if(maxNumber<area_3[i]){
        maxNumber = area_3[i];
        countMax = i;     
    }
}
area_3.splice(countMax, 1);

console.log(area_3)

// 4*. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов  с номерами от 000001 до 999999. «Счастливым» считается билетик у которого сумма первых трёх цифр номера равна сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576. Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и теперь раздумывает, как много сувениров потребуется. С помощью программы подсчитайте сколько счастливых билетов в одном рулоне. 

let luckyTicket = document.querySelector('.luckyTicket');
let btnNumber = document.querySelector('.btn-number');
let answer = document.querySelector('.answer');

btnNumber.addEventListener('click', function(e){
    e.preventDefault();
    let inputNumber = document.querySelector('.input__number').value;
    if(isLuckyTicketber(inputNumber)){
        answer.innerHTML = 'Поздравляю ваш билет счастливый';
    } else {
        answer.innerHTML = 'Ваш билет не являеться счастливым';
    }
})

let sun = 0;

for(let i = 001001; i < 999999; i++){   
    if(isLuckyTicketber(i)){
        sun=sun+1;
    }   
}

luckyTicket.innerHTML = sun;

function isLuckyTicketber(number) {
	let str = String(number);
	
	let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
	let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
	
	return sum1 == sum2;
}



 