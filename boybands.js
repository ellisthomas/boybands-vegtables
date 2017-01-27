
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
// Keep track of which band we're on in the loop
// Keep track of which veggie we're on in the loop
// Get a reference to the appropriate DOM element for bands
// Get a reference to the appropriate DOM element for vegetables


var loopCount = 5;
var currentBand = "";
var currentVeggie = "";
var bandsElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");


// Start looping

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {


  currentBand = bands[loopTracker];


  currentVeggie = vegetables[loopTracker];

  console.log(currentBand, currentVeggie);

  bandsElement.innerHTML += (currentBand + "<br>");

  veggieElement.innerHTML += (currentVeggie + "<br>");

}




// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)