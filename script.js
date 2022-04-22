"use strict";
let array1 = ["a", "b", "c", "d", "e"];
let array2 = [1, 2, 3, 4, 5];
let array3 = [true, false, true, false, true];

function funcName(arrayParameter) {
  if (arrayParameter[0] === "a") {
    return arrayParameter.push("f");
  } else if (arrayParameter[0] === 1) {
    return arrayParameter.push(6);
  } else arrayParameter[0] === true || false;
  return arrayParameter.push(false);
}

funcName(array1);
funcName(array2);
funcName(array3);
console.log(array1);
console.log(array2);
console.log(array3);
