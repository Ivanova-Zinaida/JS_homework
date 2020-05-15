// 1 Задача: Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и возвращает true, если массивы равны и false, если не равны. 
let array_1 = ['Дом','Сом', 'Лен', 'Дым',12];
let array_2 = ['Дом','Сом', 'Лен', 'Дым',13,20];

function checkArray(array_1, array_2){
    
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
    n==array_1.length? console.log(true):console.log(false);
    }else{
         console.log(false)
    }
}
checkArray(array_1, array_2);