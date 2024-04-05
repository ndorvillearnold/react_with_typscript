//type annotation
//you can ONLY give apples a number because a number is after equal
const apples: number = 5;


//example of "Type inference". When you hover over apples it will infer its a number because after the equal sign its a number
// const apples = 5;

let speed: string = "fast";
let hasName: boolean = true;
let nothing: undefined = undefined;

//built in objects
//date object
let now: Date = new Date();

//object literals and annotations

//array literals ARRAY
let colors: string[] = ["red", "green", "blue", "yellow"];
let myNumbers: number[] = [5, 6, 8];
let myBooleans: boolean[] = [true, false];

//classes always have capital names
class Car {}

//instamce of a car
//makes a new car instance .....new Car()
let car: Car = new Car();

//object literals and
let point: { x: number; y: number } = {
	x: 10,

	y: 16,
};

//function
const logNumber: (i: number)=> void = (i: number) => {
	console.log(i);
};
