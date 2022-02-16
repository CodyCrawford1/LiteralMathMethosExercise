// 1a
let warmHugs = "Hi, I\'m Olaf and I like warm hugs."
// 1b
console.log(warmHugs.toUpperCase());
// 1c
console.log(warmHugs.replace("like", "love"));
// 2a
let beenImpaled = "Oh, look at that. I've been impaled."
// 2b
console.log(beenImpaled.slice(17, 35));
// 3a 
let dotDotDot = "..."
// 3b
let skullBones = `I don't have a skull ${dotDotDot} or bones.`
// 4
console.log(Math.PI);
// 5
let randomNumber = Math.random()

randomNumber *=3

console.log(randomNumber);

randomNumber = Math.floor(randomNumber)

console.log(randomNumber);

randomNumber++;
console.log(randomNumber);

// BONUS
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim()); // LET IT GO! LET IT GO!

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replace(/ /g, "_"));

// 8
console.log(Math.sqrt(2)); // 1.4142135623730951
// console.log(Math.SQRT2);

// 9
// Completed on separate lines
// let newRandomNumber = Math.random();
// newRandomNumber *= 17;
// newRandomNumber = Math.floor(newRandomNumber);
// newRandomNumber += 7;
// console.log(newRandomNumber); // 7, 8, 9, up to 23

// Extra Bonus" Completed ona single line 
let newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
// let newRandomNumber = Math.floor(Math.random() * (16 + 1) + 7);
// let newRandomNumber = Math.floor(Math.random() * 17 + 7);
// let newRandomNumber = Math.floor(A number from 0 up to 16.999 + 7);
// let newRandomNumber = Math.floor(A number from 7 up to 23.999);
// let newRandomNumber = A whole number from 7 up to 23;
console.log(newRandomNumber); // 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23