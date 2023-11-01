`use strict`;
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(4));

// function calculateEvenTotal(number) {
//   sum = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     } else {
//     }
//   }

//   return sum;
// }

// console.log(calculateEvenTotal(3));

// const start = 6;
// const end = 17;
// let number;
// for (number = start; number <= end; number++) {
//   if (number % 5 === 0) {
//     console.log(number);
//     break;
//   }
// }
// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// const result = findNumber();
// console.log(`Result of function execution ${result}`);
// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   const newArray = [lastElementIndex, array[lastElementIndex]];
//   return newArray;
// }
//const result =  getLastElementMeta(["apple", "peach", "pear", "banana"]);
// console.log(result);
// function getLength(array) {
//   const newArray = array.join("");
//   return newArray.length;
// }
// const result = getLength(["Mango", "hurries", "to", "the", "train"]);
// console.log(result);
// function calculateEngravingPrice(message, pricePerWord) {
//   const messageArray = message.split(" ");
//   const sum = messageArray.length * pricePerWord;
//   return sum;
// }
// const result = calculateEngravingPrice("JavaScript is in my blood", 10);
// console.log(result);
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// const result = firstTwoEls;
// console.log(result);

// const result2 = nonExtremeEls;
// console.log(result2);

// const result3 = lastThreeEls;
// console.log(result3);
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);
// function getSlice(array, value) {
//   const newValue = array.indexOf(value);
//   const newArray = array.slice(0, newValue + 1);
//   return newArray;
// }
// const result = getSlice(["Mango", "Poly", "Ajax"], "Mango");
// console.log(result);
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(`${i}`);
//   }
//   return numbers;
// }
// const result = createArrayOfNumbers(29, 34);
// console.log(result);
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trushed");

// console.log(apartment);
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (let key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);
//
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// function countProps(object) {
//   let propCount = Object.keys(object).length;

//   return propCount;
// }
// const result = countProps(apartment);
// console.log(result);
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const money = Object.values(salaries);

  for (let coin of money) {
    totalSalary += coin;
    // console.log(totalSalary);
  }
  return totalSalary;
}

const result = countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
console.log(result);
