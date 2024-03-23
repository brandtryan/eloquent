const cl = console.log;
const black = "\x1b[33m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";
const yellow = "\x1b[33m%s\x1b[0m";
const blue = "\x1b[34m%s\x1b[0m";
const magenta = "\x1b[35m%s\x1b[0m";
const cyan = "\x1b[36m%s\x1b[0m";
const white = "\x1b[37m%s\x1b[0m";

// Chapter 2 Exercises

// // Looping a Triangle
// const lowpass = (cutoff) => (n) => n <= cutoff;
// const lt7 = lowpass(7);
// let str = "#";

// while (lt7(str.length)) {
//   cl(blue, str);
//   str = str.concat("#");
// }

// FizzBuzz
let number = 0;
const fits = (x, number) => Number.isInteger(number / x);

for (; number < 101; number++) {
  if (fits(5, number) && fits(3, number)) {
    console.log("FizzBuzz");
  } else if (fits(3, number)) {
    console.log("Fizz");
  } else if (fits(5, number) && !fits(3, number)) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
