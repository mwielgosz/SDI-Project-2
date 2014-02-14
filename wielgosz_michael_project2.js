//alert("JavaScript works!");

// Michael Wielgosz
// SDI 1402
// Project 2
// Sled Race


// Initialize global variables
var myName = "Mike Wielgosz",
    userName = "John Doe",
    numberOfRaces = 1,
    maxSledRaces = 5,
    multipleRaces = false,
    numberOfUserWins = 0;;
    
// Funtion to compare input for users name against fake name
var greetFriend = function(friendName) {
    if (friendName === "John Doe") {
        console.log("Even though I really doubt your real name is " + userName + ", it really doesn't matter. Let's go check out this awesome hill that I found.");
    } else {
        console.log("It's nice to meet you " + userName + ". I found this great hill so grab your sled and let's check it out!");
    }
};

// Function returns false when only one race or true if multiple races
var confirmNumberOfRaces = function(moreThanOneRace, maxRaces) {
    var numRaces = 1;

    console.log("Right now, we're planning on riding down once, but I'll race you up to five times.");
    // Loop until user selects between 1 and 5 maxRaces
    while (moreThanOneRace) {
        numRaces = parseInt(prompt("How many times would you like to race down the hill?"));

        if (numRaces > 1 && numRaces <= maxRaces) {
            // User selected between 1 and 5 races, break loop
            console.log("Perfect! " + numRaces + " sounds good to me!");
            numberOfRaces = numRaces;
            break;
        } else if (numRaces > maxRaces) {
            // User selected over 5 races, repeat loop
            console.log("Sorry, but " + numRaces + " is too many for me. I'm getting tired, but I'll races down five more times today.");
        } else if (numRaces === 1) {
            // User selected 1 race, which is not multiple races, exits loop
            console.log("One time is not considered going down the hill more than once! Oh well, one race is fine with me.");
            moreThanOneRace = false;
        }
    }

    return moreThanOneRace;
};

// Function for performing sled race
var performSledRace = function(numRaces) {
    var myTime = 0,
        userTime = 0,
        userWins = 0,
        nameLengthDifference = 0;

    // Determine difference between the number of characters in myName (Mike Wielgosz) and userName
    nameLengthDifference = myName.length - userName.length;
    if (nameLengthDifference < 0) {
        // If user name length is longer than my name, reverse mathematics
        nameLengthDifference = userName.length - myName.length;
    } else if (nameLengthDifference === 0) {
        // If both names are the same length, use standard length
        nameLengthDifference = 5;
    }

    // Loop for each race based on number of requested races and display output
    for(i=1; i<=numRaces; i++) {
        // Randomize times for race finish
        myTime = Math.random() * (nameLengthDifference) + nameLengthDifference;
        userTime = Math.random() * (nameLengthDifference) + nameLengthDifference;

        // Display race finish times, rounded to two decimal places
        console.log("\nRace " + i + ": Your time was " + userTime.toFixed(2) + " seconds, while my time was " + myTime.toFixed(2) + " seconds.");

        // Find who won the race and output
        if (myTime < userTime) {
            console.log(myName + " wins race " + i);
        } else if (myTime > userTime) {
            console.log(userName +" wins race " + i);
            userWins++;
        } else {
            console.log("We tied race " + i + "!");
        }
    }

    return userWins;
};

/* Function to combine strings to display final race results
 *
 * @param possibleOutcomes:
 *      0 - Congratulations
 *      1 - I'm sorry
 *      2 - you've won
 *      3 - you've lost because
 *      4 - we've tied because
 *      5 - out of
 *      6 - races!
 */
var outputFinalResults = function(friendName, raceOutcome) {
    var raceResults = "",
        possibleOutcomes = raceOutcome.split("~");

    if (numberOfUserWins > (numberOfRaces / 2)) {
        // User wins
        raceResults = possibleOutcomes[0].concat(friendName, possibleOutcomes[2], numberOfUserWins, possibleOutcomes[5], numberOfRaces, possibleOutcomes[6]);
    } else if (numberOfUserWins < (numberOfRaces / 2)) {
        // User loses
        raceResults = possibleOutcomes[1].concat(friendName, possibleOutcomes[3], possibleOutcomes[2], numberOfUserWins, possibleOutcomes[5], numberOfRaces, possibleOutcomes[6]);
    } else {
        // Tie
        raceResults = friendName.concat(possibleOutcomes[4], possibleOutcomes[2], numberOfUserWins, possibleOutcomes[5], numberOfRaces, possibleOutcomes[6]);
    }
    return raceResults;
};

console.log("Hello there! My name is " + myName + " and I see that you're sledding alone. Come join me!");
userName = prompt("I've been looking for someone to race all day. What is your full name?", userName);
greetFriend(userName);

console.log("While we're walking to the hill, let's figure out how many times we should race down.");
multipleRaces = confirm("Would you like to race down the hill more than once?");
// Confirms user actually wants to race down more than once.
multipleRaces = confirmNumberOfRaces(multipleRaces, maxSledRaces);

console.log("Well, we're at the top of the hill. This is going to be one heck of a sled ride!\nLet's Race!");

// Calculate race results
numberOfUserWins = performSledRace(numberOfRaces);

// Concatenate race output for console display
console.log("\n" + outputFinalResults(userName, "Congratulations ~I'm sorry ~ you've won ~ you've lost because~, we've tied because~ out of ~ races!"));
