`use strict`;

//TODO:==============================================
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function updateFruits(arr) {
//   return arr.map((items, index) => {
//     items.price * 0.8;
//     return { ...items, price: items.price * 0.8, id: index + 1 };
//   });
// }

// console.log(updateFruits(fruits));

/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Одеса", "Умань", "Харків"]
 */
// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2025-07-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2025-03-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2025-07-10"),
// };
// const arrayCity = Object.keys(concerts)
//   .filter((city) => concerts[city] > new Date())
//   .toSorted((a, b) => concerts[a] - concerts[b]);
// console.log(arrayCity);

//TODO:=============================================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel

// class Worker {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   getSalary() {
//     return this.salary;
//   }
// }

// class TopLevelWorker extends Worker {
//   constructor(hierarchyLevel, name, age, salary) {
//     super(name, age, salary);
//     this.hierarchyLevel = hierarchyLevel;
//   }
//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }

// const exempTopLevelWorker = new TopLevelWorker("top", "John", 35, 4500);
// console.log(exempTopLevelWorker.getHierarchyLevel());
// console.log(exempTopLevelWorker.getSalary());

//TODO:=============================================
/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

// class Notes {
//   static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }
//   #findNoteIndex(id) {
//     return this.items.findIndex((item) => item.id === id);
//   }
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(id) {
//     const index = this.#findNoteIndex(id);
//     if (index !== -1) this.items.splice(index, 1);
//   }
//   updatePriority(id, newPriority) {
//     const index = this.#findNoteIndex(id);
//     if (index !== -1) this.items[index].priority = newPriority;
//   }
// }
// const newObj = new Notes();
// newObj.addNote({ text: "aaa", priority: Notes.Priority().LOW, id: 1 });
// newObj.addNote({ text: "bbb", priority: Notes.Priority().LOW, id: 2 });
// newObj.updatePriority(2, Notes.Priority().HIGHT);
// console.log(newObj);

// *Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
//   і перевіряє правильність закриття дужок () {} []
//   Якщо рядок містить коректний код функція повертає true.
//   В іншому випадку повертає false
// */

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

// console.log(checkBrackets(someFn));

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, "");
// }
// const result = disemvowel(
//   "This website is for losers LOL!)",
//   "Ths wbst s fr lsrs LL!"
// );
// console.log(result);

// function add(...args) {
//   return args.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(add(15, 27));
