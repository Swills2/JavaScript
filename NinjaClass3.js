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
    return person;
}

function Sensei(name, health = 200, speed = 10, strength = 10) {
    var sen = {};

    sen.name = name;
    sen.health = health;
    sen.speed = speed;
    sen.strength = strength;

    sen.speakWisdom = function(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    sen.showStats = function () {
        console.log("Name: " + sen.name + " Health: " + sen.health + " Speed: " + sen.speed + " Strength: " + sen.strength);
    }
} 