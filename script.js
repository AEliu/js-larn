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

