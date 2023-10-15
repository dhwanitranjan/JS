// Ref

// Map, Filter, Reduce
const random = [4, 6, 7, 8, 9, 4, 2, 4, 5, 1, 1, 2, 2, 5, 4, 8, 8, 9, 9];

const total = random.reduce((acc, curr) => {
  !Object.keys(acc).includes("" + curr)
    ? (acc[curr] = 0)
    : (acc[curr] = acc[curr] + 1);
  return acc;
}, {});
console.log(total);
