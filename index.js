#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 10);
console.log(chalk.bold.magenta("Welcome to Number Guessing Game"));
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess the number between 1-10"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.cyan(`"Congratulations! You guessed right number"`));
}
else {
    console.log(chalk.red(`"You guessed wrong number"`));
}
