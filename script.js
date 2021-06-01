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


// Array
let colors = Array(3);      // 创建一个包含3 个元素的数组
let names = Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组

console.log(colors[1]); // undefined
console.log(names[0]); // Greg

console.log(Array.from("Greg")); // ["G", "r", "e", "g"]

const m = new Map().set(1, 2).set(3, 4);
console.log(m);
console.log(Array.from(m)); // [[1, 2], [3, 4]]

const s = new Set().add(1).add(2).add(3).add(4);
console.log(Array.from(s)); // [1, 2, 3, 4]

// 任意可迭代对象
const iter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 2;
    yield 3;
    yield 4;
  }
}
console.log(Array.from(iter)); // [1, 2, 2, 3, 4]

// 第二个可选参数 函数
console.log(Array.from(iter, x => x**2)); // [1, 4, 4, 9, 16]
// 第三个可选参数，映射this值
console.log(Array.from(iter, x => x**this.exponent,{exponent: 2})); // [NaN, NaN, NaN, NaN, NaN]
console.log(Array.from(iter, function(x){return x**this.exponent} ,{exponent: 2})); // [1, 4, 4, 9, 16], 'this' works.

// Array的原型上暴露了3个用于检索数组内容的方法：keys()、values()和entries()。
// keys()返回数组索引的迭代器
// values()返回数组元素的迭代器
// entries()返回索引/值对的迭代器
// 因为这些方法都返回迭代器，所以可以将它们的内容
// 通过Array.from()直接转换为数组实例
const a = ["foo", "bar", "baz", "qux"];

const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());
console.log(aKeys);      // [0, 1, 2, 3]
console.log(aValues);    // ["foo", "bar", "baz", "qux"]
console.log(aEntries);   // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

for (const [idx, element] of a.entries()) {
  document.write(idx + '&nbsp;');
  document.write(element + '<br>');
}

const buf = new ArrayBuffer(16);   // 在内存中分配16 字节
alert(buf.byteLength);               // 16

/*
// DataView默认使用整个ArrayBuffer
const fullDataView = new DataView(buf);

alert(fullDataView.byteOffset);        // 0
alert(fullDataView.byteLength);        // 16
alert(fullDataView.buffer === buf);   // true

// 构造函数接收一个可选的字节偏移量和字节长度
//    byteOffset=0 表示视图从缓冲起点开始
//    byteLength=8 限制视图为前8 个字节
const firstHalfDataView = new DataView(buf, 0, 8);
alert(firstHalfDataView.byteOffset);        // 0
alert(firstHalfDataView.byteLength);        // 8
alert(firstHalfDataView.buffer === buf);   // true

// 如果不指定，则DataView会使用剩余的缓冲
//    byteOffset=8 表示视图从缓冲的第9 个字节开始
//    byteLength未指定，默认为剩余缓冲
const secondHalfDataView = new DataView(buf, 8);
alert(secondHalfDataView.byteOffset);        // 8
alert(secondHalfDataView.byteLength);        // 8
alert(secondHalfDataView.buffer === buf);   // true
*/
        
