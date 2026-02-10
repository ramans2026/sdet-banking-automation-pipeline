export function randomAmount(min = 10, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
