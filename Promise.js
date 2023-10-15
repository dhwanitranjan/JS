// ref
// https://www.youtube.com/watch?v=bWaucYA1YRI&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im&index=2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#examples

const printData = (data) => {
  return data + " Done";
};

const sampleFun = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = false; //
      !err ? resolve(printData(data)) : reject("Rejected");
    }, 1000);
  });
};

const data = "Hi there!!!";

sampleFun(data)
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
  .finally(() => console.log("Done"));
