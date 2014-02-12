//alert("JavaScript works!");

// Michael Wielgosz
// SDI 1402
// Project 2
// Sled Race


// Initialize global variables
var userName = "John Doe",
    numberOfRides = 1,
    maxSledRides = 5,
    multipleRides = false;
    
// Funtion to compare input for users name against fake name
var greetFriend = function(friendName) {
    if (friendName === "John Doe") {
        console.log("Even though I really doubt your real name is " + userName + ", it really doesn't matter. Let's go check out this awesome hill we found.");
    } else {
        console.log("It's nice to meet you " + userName + ". We found this great hill so grab your sled and let's check it out!");
    }
};

// Function returns false when only one ride or true if multiple rides
var confirmNumberOfRides = function(moreThanOneRide, maxRides) {
    var numRides = 1;

    console.log("Right now, we're planning on riding down once, but I'll ride up to five times.");
    // Loop until user selects between 1 and 5 rides
    while (moreThanOneRide) {
        numRides = parseInt(prompt("How many times would you like to ride down the hill?"));

        if (numRides > 1 && numRides <= maxRides) {
            // User selected between 1 and 5 rides, break loop
            console.log("Perfect! " + numRides + " sounds good to me!");
            numberOfRides = numRides;
            break;
        } else if (numRides > maxRides) {
            // User selected over 5 rides, repeat loop
            console.log("Sorry, but " + numRides + " is too many for me. I'm getting tired, but I'll ride down five more times today.");
        } else if (numRides === 1) {
            // User selected 1 ride, which is not multiple rides, exits loop
            console.log("One ride is not considered going down the hill more than once! Oh well, one ride is fine with me.")
            moreThanOneRide = false;
        }
    }

    return moreThanOneRide;
};

console.log("Hello there! My name is Mike Wielgosz and I see that you're sledding alone. Come join us!")
userName = prompt("We're all going to go sledding together. What is your full name?", userName);
greetFriend(userName);

console.log("While we're walking to the hill, let's figure out how many times we should sled down.");
multipleRides = confirm("Would you like to go down the hill more than once?");
// Confirms user actually wants to ride down more than once.
multipleRides = confirmNumberOfRides(multipleRides, maxSledRides);

console.log("Well, we're at the top of the hill. This is going to be one heck of a sled ride!");
