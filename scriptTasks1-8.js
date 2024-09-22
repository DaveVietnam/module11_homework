//ВСЕ ЗАДАНИЯ В ОДНОМ ФАЙЛЕ

// Задание 1
/*

let arr = [1, 3, 4, 7, 8, 11, 2, null, "hello", 0];

const arrNumbers = function (arr) {
  let arrEvenNum = arr
    .filter((el) => el % 2 === 0 && el !== null && el !== 0)
    .reduce((acc, el) => acc + el, 0);
  console.log(arrEvenNum);

  let arrOddNum = arr
    .filter((el) => el % 2 > 0 && el !== null && el !== 0)
    .reduce((acc, el) => acc + el, 0);
  console.log(arrOddNum);

  let arrZero = arr.filter((el) => el === 0);
  console.log(+arrZero);
};

console.log(arrNumbers(arr));

*/

// Задание 2
/*
function isPrimeNumber(num) {
  // 0, 1 or 1000
  if (num < 2 || num > 1000) {
    return "Данные не верны";
  } else {
    
    //checking,starting from 2 if the numer can be divided by any number besides 1 and itself
    //it goes from all numbers between 2 and 121(in my case)
   
    for (let i = 2; i < num; i++) {
      
      //if it can be divided and the remainder === 0 then it's not a prime number
      //among all the numbers above, 11 was found and 121/11 is 0, so the number isnt prime
      
      if (num % i === 0) {
        return "Составное";
      }
    }
    return "Простое";
  }
}

console.log(isPrimeNumber(121));
*/

// Задание 3
/*

//Higher order functions and callback functions

//function expression
const getSum = function (a) {
  return function (b) {
    return a + b;
  };
};

console.log(getSum(2)(4));

//arrow
const getSumArr = (a) => (b) => a + b;
console.log(getSumArr(1)(2));

*/

// Задание 4

/*
function outputRange(start, end) {
  let count = start;
  const timer = setInterval(function () {
    console.log(count);
    count++;
    if (count > end) {
      clearInterval(timer);
    }
  }, 1000);
}

outputRange(5, 15);
*/

// Задание 5
/*Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль*/

const exponentiation = (x, n) => {
  if (Number.isInteger(x) && Number.isInteger(n)) {
    return x ** n;
  }
  return "Исользуйте целые числа";
};

console.log(exponentiation(2, 4)); //2*2*2*2 = 16
console.log(exponentiation(5, 3)); //5*5*5 = 125
console.log(exponentiation(5.3, 3));
