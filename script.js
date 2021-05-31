console.log("Hello world");

let aName = "NiuNiu";

let sayHi = (aName)=>{
    console.log(`Hello ${aName}`);
}

sayHi(aName);
sayHi(10000001);

window.document.writeln(aName);

var color = "blue";
function changeColor() {
  if (color === "blue") {
    color = "red";
  } else {
    color = "blue";
  }
}
changeColor();
window.document.writeln(color);
console.log(color);
        
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

let result = add(1, 99);
window.document.writeln(result);

// Uncaught ReferenceError: sum is not defined
// console.log(sum);

//  原始值包装类型
// ECMAScript提供了3种特殊的引用类型：Boolean、Number和String

let s1 = "some text";
let s2 = s1.substring(2);

console.log(s2);
// me text

// 引用类型与原始值包装类型的生命周期

s1.color = "red";
console.log(s1.color); // undefined

let s3 = new String("other text");
s3.color = "green";
console.log(s3.color); // green
console.log(typeof s3); // object

let num = 10.24;
console.log(num.toFixed(1)); // 10.2, 四舍五入
console.log(num.toFixed(3)); // 10.240
console.log(num.toExponential(1)); // 1.0e+1
console.log(num.toExponential(3)); // 1.024e+1

let stringObject=new String("hello world");
console.log(stringObject.length); // 11
console.log(stringObject.charAt(3)); // l
console.log(stringObject.charCodeAt(3)); // 108
console.log(stringObject.startsWith('h')); // true
console.log(stringObject.repeat(3)); // hello worldhello worldhello world

let wikiurl = 'https://zh.wikipedia.org/wiki/字符编码#现代编码模型';
console.log(encodeURI(wikiurl));
console.log(encodeURIComponent(wikiurl)); // 将所有非字母字符都替换成了相应的编码形式

            
eval("console.log('hi')");       

console.log(typeof window);
