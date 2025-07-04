"use strict";
function ageSum(kannu, chirag) {
    return kannu.age + chirag.age;
}
const a = ageSum({ name: "kannu", age: 24 }, { name: "chirag", age: 18 });

console.log(a)