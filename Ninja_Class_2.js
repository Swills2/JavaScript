function Ninja(name, health = 100, speed = 3, strength = 3) {
    var person = {};

    person.name = name;
    person.health = health;
    person.speed = speed;
    person.strength = strength;

    person.sayName = function () {
        console.log("My ninja name is " + person.name);
    }
    person.showStats = function () {
        console.log("Name: " + person.name + " Health: " + person.health + " Speed: " + person.speed + " Strength: " + person.strength);
    }
    person.drinkSake = function () {
        person.health += 10;
        console.log("Health: " + person.health);
    }
    person.punch = function (opponent) {
        if (!(opponent instanceof Ninja)) {
            console.log(opponent + " is not a Ninja");
        }
        opponent.health -= 5;
        console.log(opponent.name + " was punched by " + person.name + " and lost 5 health!")
    }

    person.kick = function (opponent) {
        if (!(opponent instanceof Ninja)) {
            console.log(opponent + " is not a Ninja");
        }
        else {
            opponent.health -= strength * 15;
            console.log(opponent.name + " was kicked by " + this.name + " and lost " + (strength * 15) + " health!");
        }

    }
    return person;
}

var redNinja = new Ninja("Bill Gates");
var blueNinja = new Ninja("Doug Slug");

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
redNinja.kick("foo");