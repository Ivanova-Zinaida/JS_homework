/*1. Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.*/

function Product (name, price){
    this.name = name;
    this.price = price;
}

let product = new Product('book', 1000);
let product1 = new Product('book1', 500);
let product2 = new Product('book2', 1500);

function Basket (){
    let products = [];
    let numberProducts = 0;
    let sun = 0;
    
    this.addProductOfBasket = function(product){
       products.push(product);
       console.log('товар успешно добавлен в корзину');
    };
    
    this.showSunPrice = function(){
        sun = 0;
        for(let i = 0; i < products.length; i++){  
           sun += products[i].price;    
        }
        return sun;
    };
    
    this.showNumbersProducts = function(){
         numberProducts = products.length;
         return numberProducts;
    };
}

let basket = new Basket();

basket.addProductOfBasket(product)
basket.addProductOfBasket(product1)
basket.addProductOfBasket(product2)

console.log(basket.showNumbersProducts());
console.log(basket.showSunPrice());

/*Создать шаблон объектов «Человек».Свойства «Имя», «Возраст», «Пол», «Интересы». Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: музыка, программирование.»Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов «Человек» и добавить «Институт».Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. Интересы: музыка, программирование. Обучается в ИТМО.»*/

function Person(name, age, gender, [...hobby]){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hobby = hobby;
    this.toString = function(){
        return `Человек: ${this.name} Возраст: ${this.age} лет. Пол: ${this.gender}. Интересы: ${this.hobby} `
    }
}

function Student(university,name, age, gender, hobby){
    Person.call(this,name, age, gender, hobby);
    this.university = university;
    this.toString = function(){
        return `Студент: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. Интересы: ${this.hobby}. Обучается в ${this.university}. `
    }
}

let student = new Student('ИТМО', 'Зинаида', 31, 'жен', ['программирование','психология','рисование'])

console.log(student.toString());


/*Создать шаблон объектов «Пользователь». Метод преобразования к строке выводит имя пользователя. Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов, в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов получает объект с именем и возрастом пользователя.*/

function User(name = "Аноним", age) {
    this.name = name;
    this.age = age;

    this.toString = function () {
        if (age) {
            return `Имя пользователя:  ${this.name}.  возраст: ${age}`;
        } else {
            return `Имя пользователя:  ${this.name}.`;
        }
    }
}

function getAnonymous(){
    return new User();
}

function getNamedUser(name, age){
    return new User(name, age);
}

console.log(getAnonymous().toString());
console.log(getNamedUser("Zina").toString());

/*Выбрать 10 незнакомых (которые не разбирались на занятиях) шаблонов объектов (классов) доступных в глобальной области и привести информацию в виде комментариев в коде для чего они используются. Информацию можно найти в документации (справочные системы по js, статьи по программированию и т.п.)*/

//1   window.cancelAnimationFrame() указывает браузеру на то, что вы хотите произвести анимацию, и просит его запланировать перерисовку на следующем кадре анимации. В качестве параметра метод получает функцию, которая будет вызвана перед перерисовкой.

//2  window.AudioContext() представляет собой некий аудио обрабатывающий объект, сооруженный из аудио модулей связаных вместе, где каждый является экземпляром класса AudioNode. AudioContext управляет созданием узлов, содержащихся в нём и выполняет обработку или декодирование аудио данных.

//3  window.BeforeUnloadEvent() метод который непосредственно перед тем, как броузер перейдет к другому документу. дает веб-приложению возможность предложить пользователю подтвердить свое желание покинуть страницу. 

//4  Map() коллекция для хранения записей вида ключ:значение.В отличие от объектов, в которых ключами могут быть только строки, в Map ключом может быть произвольное значение

//5  Конструктор Image() создает новый экземпляр HTMLImageElement. Эквивалентно document.createElement ('img').

// 6 new XMLHttpRequest() – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.

// 7  HTMLCanvasElement предоставляет свойства и методы для управления расположением и представлением элеметов canvas. Он также наследует свойства и методы интерфейса HTMLElement.

// 8 Crypto представляет базовые криптографические функции, доступные в общеупотребительном контексте. Он позволяет получить доступ к криптографически сильному генеретору случайных чисел и к криптографическим примитивам. Объект с этим интерфейсом доступен в Web-контексте через свойство Window.Сrypto.

// 9 PasswordCredential() Интерфейс API управления учетными данными предоставляет информацию о паре имя пользователя / пароль.

// 10 Geolocation() представляет возможность программно получит местоположение устройства. Он даёт веб-содержимому к позиции пользователя.



/*Перенести в ОО-код следующий пример из реального мира:
- есть курсы, учителя и ученики
- у каждого курса есть свой учитель
- у каждого учителя есть своя группа учеников
Определите какие объекты есть в этом примере, какие у них 
свойства и какие методы, как эти объекты будут между собой 
взаимодействовать, например, к курсу можно добавить учителя.
Создайте все необходимые шаблоны объектов (классы) и приведите 
пример их использования.*/

 // создаем обект курсы
function Cours( cours, university, start, end){
    this.cours = cours;
    this.srart = start;
    this.end = end;
    let teachers = [];
    let students = [];
    let rate = [];

// Возвращает имя курса  
    this.getNameCours = function(){
        return this.cours;
    }
  
// Добавляет студента 
    this.addStudent = function(student){
        students.push(student);
        return `студент успешно записался на курс ${cours}`;   
    }
  
// Добавляет удаляет
    this.deleteStudent = function(student){
        for(let i = 0; i < students.length; i++){
            if(student.fullName == students[i].fullName){
                students.splice(i, 1);
                return `Студент ${student.fullName} ушел с курса ${cours}`;
            }
        }
    };

// Добавляет учителя
    this.addTeasher = function(teacher){
        teachers.push(teacher);
        return `Лектор ${teacher.fullName} ведет ${cours}`;
    };
  
// удаляет учителя
    this.deleteTeasher = function(teacher){
        for(let i = 0; i < teachers.length; i++){
            if(teachers.fullName == teachers[i].fullName){
                teachers.splice(i, 1);
                return `Лектор ${teacher.fullName} больше не ведет  ${cours}`;
            }
        }
        
    };
 
// показывает список студентов
    this.showListStudent = function(){
        let list = '';
        for(let i = 0 ; i < students.length; i++){
            if(i==students.length-1){
                list += students[i].fullName + '.';
            } else {
                list += students[i].fullName + ', ';
            } 
            
        }
        return `На курсе ${cours} записалось ${students.length}. Список студентов: ${list}`
    };

// показывает имя учителя
    this.showNameTeacher = function(){
        let teacher = '';
        for(let i = 0 ; i < teachers.length; i++){
            if(i ==teachers.length-1){
                teacher += teachers[i].fullName + '.';
            } else {
                teacher += teachers[i].fullName + ', ';
            }           
        }
        return `Данный курс ведет ${teacher}`
    }
 
// возвращает длительность курса
    this.showDurationCours = function(){
        return `Курс ${this.cours} ночинается ${this.start} и заканчивается ${this.end}`
    };

}

// создает шаблон человека.
function Human(sex, name, lastName, middleName, age){
    this.sex = sex;
    this.name = name;
    this.lastName = lastName;
    this.middleName = middleName;
    this.age = age;
    this.fullName  = `${this.lastName} ${this.name} ${this.middleName}`;
}

// создает шаблон учителя
function Teacher(sex, name, lastName, middleName, age, cours){
    Human.call(this, sex, name, lastName, middleName, age);
    this.cours = [cours.cours];
    
    this.goOutCours = function(cours){
        cours.deleteTeasher(this);
        return `Учитель ${this.fullName} больше не ведет ${this.cours}`;
    };
    this.addCours = function(cours){
        cours.addTeasher(this);
        return `Лектор ${this.fullName} ведет курс ${this.cours}`;
    };
    
    this.lookListStudent = function (cours){
        return cours.showListStudent();
    };

 }

// создает шаблон студента

function Student_1(sex, name, lastName, middleName, age,cours){
    Human.call(this, sex, name, lastName, middleName, age);
    
    this.cours = cours.cours;
    
    this.goOutCours = function(cours){
        cours.deleteStudent(this);
        return `Cтудент ${this.fullName} покинул курс ${this.cours}`;
    };
    this.addCours = function(cours){
        cours.addStudent(this);
        return `Cтудент ${this.fullName} записался на курс ${this.cours}`;
    };
    this.lookNameTeacher = function(cours){   
        return cours.showNameTeacher();
    }
};

let nodeCours = new Cours('Node.js', 'itmo','27 may 2020', '28 iuly 2020' );
let teacher = new Teacher('муж', 'Михаил', 'Смирнов', 'Васильевич', '30', nodeCours);
let student_1= new Student_1('жен', 'Зинаида', 'Иванова', 'Михайлона', '31', nodeCours);
let student_2= new Student_1('муж', 'Василий', 'Березкин', 'Владимирович', '29', nodeCours);
let student_3= new Student_1('жен', 'Люблвь', 'Иванова', 'Михайловна', '32', nodeCours);

console.log(nodeCours.addStudent(student_2));
console.log(nodeCours.addStudent(student_3));
console.log(nodeCours.addTeasher(teacher));
console.log(student_1.addCours(nodeCours));
console.log(nodeCours.showListStudent());
console.log(nodeCours.showNameTeacher());
console.log(student_1.lookNameTeacher(nodeCours));
console.log(teacher.lookListStudent(nodeCours));
