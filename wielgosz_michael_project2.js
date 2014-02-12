//alert("JavaScript works!");

// Michael Wielgosz
// SDI 1402
// Project 2
// Sled Race


// Initialize global variables
var userName = "John Doe",
    mySpeed = .12,
    userWillWin = true;
    
// Funtion to compare input for users name against fake name
var greetFriend = function(friendName) {
    if (friendName === "John Doe") {
        console.log("Even though I really doubt your real name is " + userName + ", it really doesn't matter. Let's go check out this awesome hill we found.");
    } else {
        console.log("It's nice to meet you " + userName + ". We found this great hill so grab your sled and let's check it out!");
    }
};

console.log("Hello there! My name is Mike Wielgosz and I see that you're sledding alone. Come join us!")
userName = prompt("We're all going to go sledding together. What is your full name?", userName);
greetFriend(userName);
