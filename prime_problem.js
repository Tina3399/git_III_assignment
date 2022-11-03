let number = 13;
let count = 0;
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    count++;
  }
}
if (count === 2) {
  console.log(number, "is Prime");
} else {
  console.log(number, "is NOT Prime");
}
