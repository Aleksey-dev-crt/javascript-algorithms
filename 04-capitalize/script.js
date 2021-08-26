/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const arr = str.split(" ");
  const newArr = [];
  arr.forEach((element) => {
    element = element.charAt(0).toUpperCase() + element.slice(1);
    newArr.push(element);
  });
  return newArr.join(" ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
