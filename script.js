let name = "100 days of JavaScript";
let price = 23.90;
let goals = ["improve my JS", "better solve problems", "build something nice"]

console.log(name);
console.log(price);
console.log(goals);

// let together = name + price + goals;
// console.log(together);

console.log(`The course named  ${name} which I've paid $${price} for,\n is going to help me with my goals that are: ${goals[0]},\n ${goals[1]} and ${goals[2]}.`);


console.clear()
console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/");;
function printArray(array, arrayIndex) {
    let arrayElement = array[arrayIndex]
    return arrayElement
}

console.log(`I want to:\n${printArray(goals,0)}`);
console.log(printArray(goals,1));
console.log(printArray(goals,2));

console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/");;
