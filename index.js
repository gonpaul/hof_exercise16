// Задание 1
function greetNames(names) {
  names.forEach(name => console.log(`Привет, ${name}`));
}

// Задание 2
function multiplyByTen(numbers) {
  return numbers.map(number => number * 10);
}

// Задание 3
function filterGreaterThanTen(numbers) {
  return numbers.filter(number => number > 10);
}

// Задание 4
function formatAdults(people) {
  return people
    .filter(person => person.age > 18)
    .map(person => `${person.name} (${person.age} лет)`);
}

// Задание 5
function calculateTotalSales(sales) {
  return sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);
}

// Задание 1
greetNames(['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']);

// Задание 2
console.log(multiplyByTen([1, 2, 3, 4, 5]));

// Задание 3
console.log(filterGreaterThanTen([5, 12, 8, 130, 44]));

// Задание 4
console.log(formatAdults([{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}]));

// Задание 5
console.log(calculateTotalSales([{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}]));