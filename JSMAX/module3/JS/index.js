'use strict';

// /=============================== task 01 =======================

// Заполните массив 10-ю иксами с помощью цикла.
// let arr = []
// while(arr.length < 10){
//     arr.push("x");
// }
// console.log(arr);


//=============================== task 02 =======================

// Заполните массив числами от 1 до 10 с помощью цикла.

// let arr = [];

// for (let x = 1 ; x <= 10; x++){
//     arr.push(x);
// }
// console.log(arr);
//=============================== task 03 =======================

// Дана строка, например, '123456'. Сделайте из нее '214365'.


// let str = '123456';
//  let arr = str.split('');
// for(let num = 0; num < arr.length; num++) {
//     if(num % 2 !== 0){
//         let a = arr[num - 1];
//         arr[num - 1] = arr[num];
//         arr[num] = a;
//         // console.log(arr[num-1]);
//     }
// }
// str = arr.join('');
// console.log(str);




//=============================== task 04 =======================

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(num){
//     if (num > 0 && num < 10 ){
//         return console.log("true");
//     }else{
//         return console.log("false");

//     }
// }

// isNumberInRange(1)

//=============================== task 05 =======================

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(num){
//   return num % 2 === 0;
// }


//=============================== task 06 =======================

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи

// let arr  = [1,2,3,4,5,6,7,8];
// function evenNum (mass){
//     let newArr=[];
//     for(let i of mass){
//         if(Number(isEven(i))){
//        newArr.push(i);
//     }
// }
//     return newArr;
// }

// console.log(evenNum(arr));
//=============================== task 07 =======================

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой

// let str ='abcde abcde abcde';
// let newArr = [];
// let arr = [];

// function ucfirst(str) {
//   newArr =  str.split(" ");
//     for(let i of newArr){
//         arr.push(i[0].toUpperCase() + i.slice(1));
//     }
//     return arr.join(" ");
//   }


// console.log(ucfirst(str));


//=============================== task 08 =======================

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false

// let str = 'яблок0';
// let arr = ['банан', 'яблоко', 'персик'];

// function inArray(txt , mas){

//     if(mas.includes(txt)){
//         return true;
//     }else{
//         return false;
//     }

// }



// console.log(inArray(str, arr));

//=============================== task 09 =======================

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)
// function getDivisors(num){
//     let arr = [];
//     for(let i = 0; i <= num; i++){
//         if(num % i === 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(getDivisors(12));


//=============================== task 10 =======================


/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки
//     function сheckNumberType(num){
//         if(num % 2 === 0){
//             return "Even";
//         }else {
//             return "Odd";
//         }
//     }

// console.log( сheckNumberType(2) ); // 'Even'

// console.log( сheckNumberType(46) ); // 'Even'

// console.log( сheckNumberType(3) ); // 'Odd'

// console.log( сheckNumberType(17) ); // 'Odd'



//=============================== task 11 =======================

/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/


// function formatString(str){

//     let arr = str.split('');

//     if(arr.length >= 40){
//      arr.length = 40;
//      return arr.join("") +'...';

//     }else{
//         return str;
//     }
// }


// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка

//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка


//=============================== task 12 =======================


/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// function checkForSpam(str){
//     let str1 = str.toLowerCase();
//     if(str1.includes("spam") || str1.includes('sale')){
//         return true;
//     }else {
//         return false;
//     }
// }


// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true



//=============================== task 13 =======================

/*  
  Написать функцию, getPx(str) 
  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// function getPx(str){
//     if (typeof str === "string"){
//         return parseFloat(str);
//     }else {
//       return  null;
//     }
// }


// // Вызовы функции для проверки
// console.log( getPx("10px") ); // true
// console.log( getPx("10.5") ); // true
// console.log( getPx("0")); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null


//=============================== task 14 =======================

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/


// function findLongestWord(str){
//     let max = 0;
//     let long;
//     let arr = str.split(" ");

//     for (let i of arr){
//         if(i.length > max){
//             max = i.length;
//             long = i;
//         }
//     }
//     return long;
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // 'jumped'

//   console.log(
//     findLongestWord("Google do a roll")
//   ); // 'Google'

//   console.log(
//     findLongestWord("May the force be with you")
//   ); // 'force'


//=============================== task 15 =======================


/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/


// function findLargestNumber(num){
//     let max = 0 ;
//     for(let i of num){
//         if(i > max){
//             max = i;
//         }
//     }
//     return max;
// }



// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // 3

//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // 27

//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // 128


//=============================== task 16 =======================

/*  
  Есть массив уникальных чисел uniqueNumbers.

  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers = [2, 1, 4, 9];

// function addUniqueNumbers(...num) {
//   for (let i of num) {
//     if (!uniqueNumbers.includes(i)) {
//       uniqueNumbers.push(i);
//     }
//   }
//   return uniqueNumbers;
// }


// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

//=============================== task 17 =======================

/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

const filterFromArray = function(mas, ...num) {
let arr = mas.slice();
    for(let i of num){
        if(arr.includes(i)){
        arr.splice(arr.indexOf(i),1);
        }
    }
  return arr;
}; 

// Вызовы функции для проверки
console.log(
  filterFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]



//=============================== ***** task **** 18  =======================


/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid(login), в которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//     if (login.length >= 4 && login.length <= 16) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const isLoginUnique = function (allLogins, login) {
//     if (allLogins.includes(login)) {
//         return false;
//     } else {
//         return true;
//     }
// };

// const addLogin = function (allLogins, login) {
//     if (!isLoginValid(login)) {
//         console.log("Ошибка! Логин должен быть от 4 до 16 символов");
//     } else {
//         if (isLoginUnique(allLogins, login)) {
//             allLogins.push(login);
//             console.log('Логин успешно добавлен!');
//         } else {
//             console.log('Такой логин уже используется!');

//         }
//     }
// };

// // Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'