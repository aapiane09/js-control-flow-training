console.log("sing.js loaded");
var i = prompt("How many bottles of beer do you have?");
for (i; i >= 1; i--) {
if (i !== 2 && i !== 1) {
console.log(i + " bottles of beer on the wall, " +
i + " bottles of beer! Take one down and pass it around, "
+ (i - 1) + " bottles of beer on the wall!");
}
else if (i === 2) {
  console.log("2 bottles of beer on the wall, 2 bottles of beer! Take one down and pass it around, 1 more bottle of beer on the wall!");
}
else {
  console.log("1 more bottle of beer on the wall, 1 more bottle of beer! Take it down and pass it around, no more bottles of beer on the wall!");
}
}
