const staffsDetails = [
  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
  { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
  { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
  { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
 ];

 staffsDetails.forEach((staffsDetails) => {
  let sentence = `I am ${staffsDetails.name}, a staff of Royal Suites.`
  console.log(sentence);
 });

 staffsDetails.forEach((staffsDetails) => {
  let sentence = `I am ${staffsDetails}, a staff of Royal Suites.`
  console.log(sentence);
 });

 staffsDetails.forEach((staffDetail, index) => {
  let sentence = `index ${index} : I am ${staffDetail.name}, a staff of Royal Suites.`;
  console.log(sentence);
 });

 staffsDetails.forEach((staffDetail, index, array) => {
  console.log(array);
 });

 staffsDetails.forEach(({ name }, index) => {
  let sentence = `I am ${name}, a staff of Royal Suites.`;
  console.log(sentence);
 });