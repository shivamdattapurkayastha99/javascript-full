const age=18
const vari=21;
const doesDrive=true;

if (age!=19) {
    console.log("age is not 19");
}
if (age==='65') {
    console.log("age is 65");
} 
else {
    console.log("age is not  19");
}
if (typeof(vari)!=='undefined') {
    console.log("vari exists");
}
else{
    console.log("var is not defined");

}
if (doesDrive&&age>=18) {
    console.log("can drive");
} else {
    console.log("cannot drive");
}
console.log(age==45?'age is 45':'age is not 45');

switch (age) {
    case 18:
        console.log("age is 18");
        // break;
    case 28:
        console.log("age is 28");
        // break;
    case 38:
        console.log("age is 38");
        // break;
    default:
        console.log("i am the best");
        break;
}
