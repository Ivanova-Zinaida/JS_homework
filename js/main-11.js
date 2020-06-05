/*1. Используя прототипы:
Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Cвойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.*/

function Product (pname, price) {
    this.name = pname;
    this.price = price;
}

function Basket () {
    this._products = [];
    this._totalCartProducts = 0;
    this._totalCartPrice = 0;
}

Basket.prototype.add = function (newProduct) {
    this._products.push(newProduct);
    this._totalCartProducts++;
    this._totalCartPrice+=newProduct.price
}

Basket.prototype.getTotalCartPrice = function () {
    return this._totalCartPrice;
}

Basket.prototype.getAmountOfProducts = function () {
    return  this._totalCartProducts;
}

Basket.prototype.getPriceOfProduct = function (productName) {
    for (let iProduct of this._products) {
        if(productName.name === iProduct.name) {
            return iProduct.price;
        }
    }
}


let product1 = new Product('книга',1000);
let product2 = new Product('ручка',500);
let product3 = new Product('тетрадь',100);

let basket = new Basket();

basket.add(product1);
basket.add(product2);
basket.add(product3);

console.log(basket.getAmountOfProducts());
console.log(basket.getPriceOfProduct(product1));
console.log(basket.getTotalCartPrice());

/*2. Используя смешанное наследование:
Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке вида: 
«Студент: Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование. Обучается в ИТМО.»*/

function Person(name, age, gender, [...hobby]){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hobby = hobby;
}

Person.prototype.toString = function(){
    return `Человек: ${this.name} Возраст: ${this.age} лет. Пол: ${this.gender}. Интересы: ${this.hobby} `
}

function Student(university,name, age, gender, hobby){
    Person.call(this,name, age, gender, hobby);
    this.university = university;
}

Student.prototype.toString = function(){
        return `Студент: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. Интересы: ${this.hobby}. Обучается в ${this.university}. `
    }

let student = new Student('ИТМО', 'Зинаида', 31, 'жен', ['программирование','психология','рисование'])

console.log(student.toString());
