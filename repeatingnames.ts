import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

let userInput = "";

rl.question("What is your name\n", function (string) {
    userInput = string;
    console.log("Your name is " + userInput);
    rl.close();
});