let i = 10;
let max = 20;

while (i <= max) {
  console.log(i);
  i++;
}

//---Вивести квадрати чисел від 10 до 20.

let i = 10;
let max = 20;

while (i <= max) {
  console.log(i * i);
  i++;
}

//---Вивести таблицю множення на 7

const number = 7;

for (let i = 1; i <= max; i++) {
  console.log(`${i} * ${number} = ${i * 7}`);
}

//---Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for (let i = 1; i <= 15; i++) {
  sum = sum + i;
}
console.log(sum);

//----Знайти добуток усіх цілих чисел від 15 до 35.

let mult = 15;

for (let i = 15; i <= 35; i++) {
  mult = mult * (mult + i);
}
console.log(mult);

//---Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let max = 500;
let sum = 0;

for (let i = 1; i <= max; i++) {
  sum = sum + i;
}
console.log(sum / max);

//---7.Вивести суму лише парних чисел в діапазоні від 30 до 80.

let max = 80;
let sum = 0;

for (let i = 30; i <= max; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}
console.log(sum);

//---8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let max = 200;

for (let i = 100; i <= max; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//---9/ Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let max = +prompt();

for (let i = 1; i <= max; i++) {
  if (max % i === 0) {
    console.log(i);
  }
}

//---10. Визначити кількість його парних дільників.

//--- 12.Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
