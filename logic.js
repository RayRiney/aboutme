//When the fact button is clicked...
$("#factButton").on("click", function() {
// We generate a random number between 0 and 5 (the number of facts in booFacts )
	var number = Math.floor((Math.random() * booFacts.length));
//We display the fact from the booFacts that is in the random positon we just generated.
	$("#factText").text(booFacts[number])
})
// This array holds all of our booFacts!
var booFacts = [ "Boo has ceased to be.","Boo was a Pomeranian","Boo's best friend was another pomeranian named Buddy, who crossed over two years before Boo.", "Boo was born on March 16 making him a Pisces", "Boo's favourite food was grass", "Boo released two books before slipping the mortal coil."]

//When the "Pink" button is pressed ...
$("#textPink").on("click", function() {
//funText is changed to pink.
	$("#funText").css("color", "pink")
})

//When the "Orange" button is pressed..."
$("#textOrange").on("click", function() {
//funText is changed to orange.
$("#funText").css("color", "Orange")
})
//When the "Green" button is pressed...
$("#textGreen").on("click", function() {
//funText is changed to green.
	$("#funText").css("color", "green")
})

//When the boxGrow button  is clicked ...
$("#boxGrow").on("click", function() {
	//Image size increases!
	$("#box").animate({height:"+=100px", width:"+=100px"}, "fast");
		
})
//When the boxShrink button is clicked ...
$("#boxShrink").on("click", function() {
	//Image size decreases.
	$("#box").animate({height:"-=100px", width:"-=100px"}, "fast");
})