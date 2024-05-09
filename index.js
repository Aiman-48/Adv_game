#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// classe 
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// player name and ask for opponent
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "plz enter your name"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["skeleton", "Assassin", "Zombie"]
});
// gather data
let p1 = new Player(player.name);
let o1 = new Player(opponent.select);
do {
    // skeleton
    if (opponent.select == "skeleton") {
        // console.log (`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose,better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink health portion
            fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("you loose,better luck next time"));
            process.exit();
        }
    }
    ///assassin
    if (opponent.select == "Assassin") {
        // console.log (`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose,better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink health portion
            fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("you loose,better luck next time"));
            process.exit();
        }
    }
    // zombie
    if (opponent.select == "Zombie") {
        // console.log (`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose,better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink health portion
            fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("you loose,better luck next time"));
            process.exit();
        }
    }
} while (true);
