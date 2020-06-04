/*1 Задача: Даны несколько div элементов на html.По первому нажатию на каждый div он перекрашивается зеленым цветом, при повторном нажатии перекрашивается обратно и так далее каждый клик происходит чередование цвета.*/

let wrapColor = document.querySelector('.wrap__color');

wrapColor.addEventListener('click', function(e){
    let elemTarget = e.target;
    if(elemTarget.classList.contains('color__elem')){
        elemTarget.classList.toggle('color__elem-active');
    }
})

//2 Задача: Реализовать счётчик нажатий на кнопку: Дана кнопка внутри неё записана цифра. При клике на кнопку – её значение должно увеличиваться на единицу. 

let btnCount = document.querySelector('.btn__count');

btnCount.addEventListener('click', countNumber);

let number = 0;

function countNumber(e){
    e.preventDefault();
    number++ 
    this.innerText= number;
}

/* 3 Задача: Реализовать возможность добавления комментариев. Комментарий вводится в textarea.Комментарий добавляется по нажатию на кнопку Комментировать.При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый), имя автора (пока у всех комментарие одинаковое), дата добавления комментария (текущая дата), текст комментария (тот, что был введен в textarea).  comments__text, author-blog, comments__date, comments__text comments__text_bg*/

let form = document.querySelector('.wrap__comment');
let numberComment = document.querySelector('.number__comment');
let ulComment = document.querySelector('.comments__list');
let date = new Date();
let day = date.getDate();
let mounth = date.getMonth();
let mounths = ['January','February','March','April', 'May','June','July','August','September','October','November','December'];
let year = date.getFullYear();
let fulDate = `${day} ${mounths[mounth]} ${year}`
let url = 'footer-img-1.jpg';
let author = 'Jhon Doe';
let count = 1;

form.addEventListener('click', function(e){
    e.preventDefault();
    let elemTarget = e.target;
    let textArae = document.querySelector('.form__textarea').value;
    if(elemTarget.classList.contains('form__btn')){
        if(textArae!=0){
            numberComment.innerText = count++;
            let li = document.createElement('li');
            li.classList.add('comments__item');
            
            let img = document.createElement('img');
            img.classList.add('comments__img');
            img.setAttribute("src", "image/" + url);
            
            let containerAuthor = document.createElement('p');
            containerAuthor.classList.add('comments__text');
            
            let spanAuthor = document.createElement('span');
            spanAuthor.innerText = author+ '. ';
            
            let spanDate = document.createElement('span');
            spanDate.innerText = fulDate;
            
            containerAuthor.appendChild(spanAuthor);
            containerAuthor.appendChild(spanDate);
            
            let textComment = document.createElement('p');
            textComment.classList.add('comments__text');
            textComment.innerText = textArae;
            li.appendChild(img);
            li.appendChild(containerAuthor);
            li.appendChild(textComment)
            ulComment.appendChild(li)

        }
    } 
    
    this.reset(); 
});

/*4 Задача: Дан массив с объектами, где каждый объект описывает книгу: артикул, автор, название, описание.Сформировать функцию, которой передаётся массив книг, и которая создаст и внесёт все необходимые html элементы, стили, и содержание для отображения всей информации о книгах в виду таблицы.*/

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

function renderProducts(arr){
    let wrapBlock = document.querySelector('.books_block');
    let trTitle = document.createElement('tr');
    trTitle.innerHTML = `<td>№</td><td>Название</td><td>Автор</td><td>Описание</td><td>Артикул</td>`;
    wrapBlock.appendChild(trTitle);
    for(let i = 0; i < arr.length; i++){
       let tr = document.createElement('tr'); 
       tr.innerHTML = `<td>${i+1}</td><td>${arr[i].title}</td><td>${arr[i].author}</td><td class="description">${arr[i].description}</td><td>${arr[i].itemGoods}</td>`;
       wrapBlock.appendChild(tr);
    }
}

renderProducts(products);

/*5 Задача: Реализовать одну страничку HTML о знаменитом человеке с использованием панели с вкладками (табы). Например, в качестве знаменитого человека возьмём Пушкина А.С., из википедии возьмём наполнение странички, в качестве вкладок можно указать: биография, творчество и т.п. Переключение между вкладками страницы и изменение содержимого реализовать с использованием JS.*/

let tabContainer = document.querySelector('.features__tabs_big');
let tabText = document.querySelectorAll('.content-tab');

tabContainer.addEventListener('click', function(e){
    e.preventDefault()
    let elemTarget = e.target;
    if(elemTarget.classList.contains('tabs__link')){
        let dataTab = elemTarget.getAttribute('data-index');
        for(let i = 0; i < tabText.length; i++){
            tabText[i].classList.remove('active__tabs');
            if(tabText[i].getAttribute('data-tab')==dataTab){
                tabText[i].classList.add('active__tabs');
            }
        }
        
    }
})