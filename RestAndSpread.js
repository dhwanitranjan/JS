// Ref:
// https://www.youtube.com/watch?v=sOZwwL_-cBA&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im&index=1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/

// Rest, spread, operators

const ObjExample = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  companyName: "CodeSweetly",
  profession: "Web Developer",
  gender: "Male",
};

// rest operator in Object
const { firstName, lastName, ...rest } = ObjExample;
console.log(rest);
// {
//   companyName: 'CodeSweetly',
//   profession: 'Web Developer',
//   gender: 'Male'
// }

// spread example in object

const newObjectExample = { ...ObjExample, profession: "React developer" };
console.log(newObjectExample);
//  {
//     firstName: 'Oluwatobi',
//     lastName: 'Sofela',
//     companyName: 'CodeSweetly',
//     profession: 'React developer',
//     gender: 'Male'
//   }

const arrExample = ["Oluwatobi", "Sofela", "CodeSweetly"];
// Spread operator in an array
function myBio(firstName, lastName, company) {
  return { spread: `${firstName} ${lastName} runs ${company}` };
}
console.log(myBio(...arrExample));

// Rest operator in an array
function myBio1(...rest) {
  return { rest: rest };
}
console.log(myBio1(...arrExample));
