/* Создать функцию которая выводит время в html и обновляет значения каждую секунду. Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами.*/

function showeTime(){
    let hours = document.querySelector('.hours');
    hours.style.color = 'white';
    let minutes = document.querySelector('.minutes');
    minutes.style.color = 'lightgreen';
    let seconds = document.querySelector('.seconds');
    seconds.style.color = 'red';
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if(hour<=9){
        hours.innerHTML ='0' + hour + ' : ';
       }
    if(min<=9){
        minutes.innerHTML ='0' + min + ' : ';
       }
    if(sec<=9){
       seconds.innerHTML ='0' + sec;  
    }else{
        hours.innerHTML = hour + ' : ';
        minutes.innerHTML = min + ' : ';
        seconds.innerHTML = sec; 
    }
 
}

setInterval(showeTime, 1000);

/*Дан массив с объектами, где каждый объект описывает товар: фото, артикул, описание и т.п. Сформировать функцию, которой передаётся массив товаров, и которая создаст и внесёт все необходимые html элементы, стили, и содержание для отображения всей информации о товарах.*/

let products = [
    {
        title:'Essential cotton-blend',
        linkTitle:'products.html',
        price:'$200.00 USD',
        salePrise:'$100.00 USD',
        sale: true,
        img:'product-1.jpg'
    },
    {
        title:'Striped cotton t-shirt',
        linkTitle:'products.html',
        price:'$150.00 USD',
        salePrise:'',
        sale: false,
        img:'product-3.jpg'
    },
    {
        title:'Sequin star t-shirt',
        price:'350.00',
        salePrise:'$150.00',
        sale: true,
        img:'product-4.jpg'
    },
    {
        title:'Essential cotton-blend',
        linkTitle:'products.html',
        price:'$200.00 USD',
        salePrise:'$100.00 USD',
        sale: true,
        img:'product-1.jpg'
    },
    {
        title:'Striped cotton t-shirt',
        linkTitle:'products.html',
        price:'$150.00 USD',
        salePrise:'',
        sale: false,
        img:'product-3.jpg'
    },
    {
        title:'Sequin star t-shirt',
        linkTitle:'products.html',
        price:'350.00',
        salePrise:'$150.00',
        sale: true,
        img:'product-4.jpg'
    },
]

function renderProducts(arr){
    let wrapBlock = document.querySelector('.products_block');
 
    for(let i = 0; i < arr.length; i++){
        
        let card = document.createElement('div');
        card.classList.add('card'); 

        let cardInnerTop = document.createElement('div');
        cardInnerTop.classList.add('card__inner_top');
        
        let productLink = document.createElement('a');
        cardInnerTop.classList.add('product__link');

        let image = document.createElement('img');
        image.classList.add('card__img');       
        image.setAttribute("src", "image/" + arr[i].img);
        
        productLink.appendChild(image);
        cardInnerTop.appendChild(productLink);
        
        let cardInnerBotton = document.createElement('div');
        cardInnerBotton.classList.add('card__inner_botton');

        let cardTitle = document.createElement('a');
        cardTitle.classList.add('card__title');
        cardTitle.classList.add('card__title_link');
        cardTitle.innerText = arr[i].title;
        cardTitle.setAttribute("href", arr[i].linkTitle);
        
        cardInnerBotton.appendChild(cardTitle);
        
        
        if(arr[i].sale==true){
           let sale = document.createElement('span');
           sale.innerHTML = 'sale'
           sale.classList.add('card__btn'); 
           card.appendChild(sale);
           
            let cardPrice = document.createElement('p');
            cardPrice.classList.add('card__price');
        
            let price = document.createElement('span');
            price.classList.add('card__price_gray');
            price.innerText= '$' + arr[i].price + ' USR ';
            
            let salePrise = document.createElement('span');
            salePrise.innerHTML= '$' + arr[i].salePrise + ' USR ';
    
            cardPrice.appendChild(price);
            cardPrice.appendChild(salePrise);
            
            cardInnerBotton.appendChild(cardPrice);
        }else {
            let cardPrice = document.createElement('p');
            cardPrice.classList.add('card__price');
            cardPrice.innerText= '$' + arr[i].price + ' USR ';
            cardInnerBotton.appendChild(cardPrice);
        }
        
        card.appendChild(cardInnerTop);
        card.appendChild(cardInnerBotton);
        
        wrapBlock.appendChild(card);
    }
}

renderProducts(products);

/*Создать светофор (красный, желтый, зелёный). Переключать цвет у светофора через каждые 2 сек сверху вниз и снизу вверх.*/


let count = 0;
function changeColorDown(){
    let sliderItems = document.querySelectorAll('.wrap__color .color');
    sliderItems[count].classList.remove('color__acrive');
    count++
    if(count>sliderItems.length-1){
        count=0;
    }
    sliderItems[count].classList.add('color__acrive');             
}
setInterval(changeColorDown, 2000);  

let count_1 = 0;
function changeColorUp(){
    let sliderItems = document.querySelectorAll('.wrap__color-two .color');
    sliderItems[count_1].classList.remove('color__acrive');
    count_1--
    if(count_1<0){
        count_1=sliderItems.length-1;
    }
    sliderItems[count_1].classList.add('color__acrive'); 
}

setInterval(changeColorUp, 2000);


/*Создать функцию которая выводит в html количество дней, часов и минут до нового года и обновляет значения каждую минуту. Датой наступления нового года считается 1 января. Функция выводит в html строку вида: "14 дней 21 час 46 минут". Нужно реализовать корректные окончания слов, например: 1 день, 2 дня, 5 дней. Функция должна корректно работать при запуске в любом году, т. е. 
грядущий год должен вычисляться программно.*/

      function CountHowMuchDaysNewYers() { 
          let div = document.querySelector('.year');
          
          let date = new Date();
          let newYears = new Date("January 1 " + (date.getFullYear() + 1))

          let days = Math.floor((newYears.getTime() - date.getTime())/86400000);
          let hour = Math.floor((newYears.getTime() - date.getTime())/3600000%24);
          let min = Math.floor((newYears.getTime() - date.getTime())/60000%60);
          
          let lasDays=parseInt(days.toString().substr(-1));
          if(days > 4 && days < 21) {
            days = `${days} дней `;
          } else if(lasDays == 1) {
            days = `${days} день `;
          } else if(lasDays==2||lasDays==3||lasDays==4) {
            days = `${days} дня `;
          } else {
            days = `${days} дней `;
          }
          
          let lasHour = parseInt(hour.toString().substr(-1));
          if(hour > 4 && hour < 21) {
            hour = `${hour} часов `;
          } else if(lasHour == 1) {
            hour = `${hour} час `;
          } else if(lasHour==2||lasHour==3||lasHour==4) {
            hour = `${hour} часа `;
          } else {
            hour = `${hour} часов `;
          }

          let lasmin = parseInt(min.toString().substr(-1));
          if(min > 4 && min < 21) {
            min = `${min} минут `;
          } else if(lasmin  == 1) {
            min = `${min} минута `;
          } else if(lasmin ==2||lasmin ==3||lasmin ==4) {
            min = `${min} минуты `;
          } else {
            min = `${min} минут `;
          }
          
          div.innerText = 'До Нового Года осталось ' + days + hour + min;
        }

CountHowMuchDaysNewYers();