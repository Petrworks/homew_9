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
