console.log("arrays in javascript");
const marks=[12,32,14,56,78]
const fruits=['apple','orange']
const mixed=['str',89,[3,5]]
const arr=new Array(23,123,45,"Orange")
console.log(arr);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray('dfdf'));
arr[0]="shivam";
let arrElement=arr[0];

// console.log(arr);
let value=marks.indexOf(34);
console.log(value);
marks.push(123);
console.log(marks);
marks.pop()
console.log(marks);
marks.shift()
console.log(marks);
marks.splice(1,2)
console.log(marks);
marks.reverse()
console.log(marks);
marks2=[12,23,44]
marks=marks.concat(marks2)
// console.log(marks);
let myObj={
    'name':'shivam',
    channel:'shivam datta',
    isActive:true,
    marks:[1,5,3,6]
}
console.log(myObj);
console.log(myObj.isActive);
console.log(myObj.channel);
