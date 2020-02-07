let database = firebase.database();

// Add initial data into the firebase when button is clicked
$("#addStats").on("click", function(event) {
  event.preventDefault();


// Retrieve the user input from the fields and give them variables
  let height = $("#height")
    .val().trim();

  let age = $("#age")
    .val().trim();

  let gender = $("#gender")
    .val().trim();

  let weight = $("#weight")
    .val().trim();

  let targetCalories = $("#targetCalories")
    .val().trim();
});

// Here is a local storage to utilize the stat data
let tempStats = {
  height: height,
  age: age,
  gender: gender,
  weight: weight,
  targetCalories: targetCalories
};

// This uploads the stat data to the database
database.ref().push(tempStats);

console.log("The following values were pushed to the firebase");
console.log(tempStats.height);
console.log(tempStats.age);
console.log(tempStats.gender);
console.log(tempStats.weight);
console.log(tempStats.targetCalories);

// This resets the input boxes
$("#height").val("");
$("#age").val("");
$("#gender").val("");
$("#weight").val("");
$("targetCalories");

// Here is a firebase event that formats the html and pulls data into it
database.ref().on("child_added", function(snapshot, prevChildKey) {
    console.log(snapshot.val());

    //Store all of this info into a variable
    let snapHeight = snapshot.val().height;
    let snapAge = snapshot.val().age;
    let snapGender = snapshot.val().gender;
    let snapWeight = snapshot.val().weight;
    let snapTargetCalories = snapshot.val().targetCalories;
});