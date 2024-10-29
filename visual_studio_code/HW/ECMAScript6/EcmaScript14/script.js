// Задание 1

// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const arrObj = [
  {
    name: 'A',
    price: 111,
  },
  {
    name: 'B',
    price: 33,
  },
  {
    name: 'C',
    price: 55,
  },
]

const someFruit = arrObj.some(item => item.price > 50)
const findFruit = arrObj.find(item => item.price > 50)
console.log(someFruit, findFruit)

console.log('====================')

// У вас есть массив объектов, представляющих товары с их названиями, категориями и ценами.
const products = [
  { name: 'Smartphone', category: 'electronics', price: 599 },
  { name: 'Laptop', category: 'electronics', price: 1200 },
  { name: 'Headphones', category: 'electronics', price: 199 },
  { name: 'Camera', category: 'electronics', price: 750 },
  { name: 'Tablet', category: 'electronics', price: 450 },
  { name: 'Desk Chair', category: 'furniture', price: 150 },
  { name: 'Sofa', category: 'furniture', price: 700 },
  { name: 'Notebook', category: 'stationery', price: 5 },
  { name: 'Pen', category: 'stationery', price: 1 },
  { name: 'Coffee Machine', category: 'appliances', price: 300 },
]
// Отфильтруйте товары категории "electronics".
// Затем с помощью map создайте массив с ценами этих товаров.
// С помощью reduce найдите общую стоимость всех товаров в категории "electronics".
const filterProd = products
  .filter(item => item.category == 'electronics')
  .map(item => item.price)
  .reduce((a, b) => a + b)
console.log(filterProd)

console.log('====================')

// У вас есть массив объектов, представляющих студентов с именами и их средним баллом.
const students = [
  { name: 'Анна', grades: 80 },
  { name: 'Иван', grades: 70 },
  { name: 'Мария', grades: 79 },
]
// Найдите первого студента со средним баллом выше 80.
// Если такой студент не найден, добавьте нового студента в начало массива с баллом 85, используя unshift.
const foundStudent = students.find(item => item.grades > 80)
if (!foundStudent) {
  students.unshift({ name: 'Muhammad', grades: 85 })
}

// Верните обновленный массив студентов.
console.log(students)

console.log('====================')

// У вас есть массив объектов, представляющих товары в корзине с их названиями, количеством и ценой за единицу.
const cart = [
  { name: 'Laptop', quantity: 3, price: 1200 },
  { name: 'Mouse', quantity: 2, price: 25 },
  { name: 'Keyboard', quantity: 1, price: 45 },
  { name: 'Monitor', quantity: 0, price: 150 },
]
// Отфильтруйте товары, у которых количество больше 0.
// Примените map, чтобы пересчитать общую стоимость каждого товара (количество * цена за единицу).
// Используя reduce, найдите итоговую стоимость всех товаров в корзине.
const filterCart = cart
  .filter(item => item.quantity > 0)
  .map(item => item.quantity * item.price)
  .reduce((a, b) => a + b)
console.log(filterCart)

// У вас есть массив объектов, представляющих задачи с их названиями и статусом (completed: true/false).

// Отфильтруйте задачи, которые еще не выполнены (completed: false).
// С помощью map создайте массив, содержащий только названия этих задач.
// Если массив незавершенных задач пустой, добавьте новую задачу в начало исходного массива с помощью unshift.

// У вас есть массив объектов, представляющих студентов с их именами и оценками (массив чисел).

// Используя map, для каждого студента подсчитайте его средний балл и добавьте это значение как новое свойство averageScore.
// С помощью filter оставьте только тех студентов, у которых средний балл выше 70.
// С помощью reduce найдите средний балл среди отфильтрованных студентов.
// Создавайте массив самостоятельно!
