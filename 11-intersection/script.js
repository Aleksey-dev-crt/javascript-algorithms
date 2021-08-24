/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
 */

function intersection(arr1, arr2) {
  const arrResult = [];
  const uniqArr1 = arr1.filter((el, pos) => {
    return arr1.indexOf(el) === pos;
  });
  const uniqArr2 = arr2.filter((el, pos) => {
    return arr2.indexOf(el) === pos;
  });
  uniqArr1.forEach((elOffArr1) => {
    uniqArr2.filter((elOffArr2) => {
      if (elOffArr2 === elOffArr1) {
        arrResult.push(elOffArr2);
      }
    });
  });
  return arrResult;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []

console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3]));
