// References:
// https://www.youtube.com/watch?v=QaUBTV7_ELY
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//Keywords:
// Closure, Lexical Scope

const sum = function (a, b) {
  const c = 5;
  return function (d = 0) {
    return a + b + c + d; //  retains all the values like
  };
};

res = sum(4, 9);
console.log(res()); // 18
res1 = sum(2, 7);
console.log(res1(2)); // 16
console.log(sum(4, 4)(4)); //17

const addition = function (a, b) {
  const c = 5;
  return {
    addTwo: function () {
      return a + b; //  retains all the values like
    },
    addFour: function (d = 0) {
      return a + b + c + d;
    },
  };
};

res2 = addition(4, 9);
console.log(res2.addTwo()); // 13
res3 = addition(2, 7);
console.log(res3.addFour(4)); // 18
console.log(addition(2, 7).addFour(6)); //20
