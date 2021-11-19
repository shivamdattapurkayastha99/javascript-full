console.log("hello shivam");
const name="Shivam";
const greeting="good morning";
console.log(greeting+' '+name);
let html="<h1>Hello Shivam</h1>"+"<p>para</p>";
html=html.concat('this','str2')

console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html);
console.log(html[0]);
console.log(html[1]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('str2dfs'));
console.log(html.includes(' fg '));
console.log(html.substring(1,6));
console.log(html.slice(-1));
console.log(html.split(' '));
console.log(html);
console.log(html.replace('this','it'));
console.log(html);
let fruit1='orange'
let fruit2='apple';
let myHtml=`Hello ${name} enjoy <h1>Heading</h1>
<p>You like ${fruit1} and ${fruit2}`;
document.body.innerHTML(myHtml)


