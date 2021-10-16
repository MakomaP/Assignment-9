//first card
//h3 tag
var tag = document.createElement("h3");
var text = document.createTextNode("Coffee Types");
tag.appendChild(text);
var element = document.getElementById("cont");
element.appendChild(tag);

//p
var tag = document.createElement("p");
var text = document.createTextNode("Arabica, Robusta, BlackCoffee,Espresso,Latte, Cappuccino");
tag.appendChild(text);
var element = document.getElementById("cont");
element.appendChild(tag);

//img
var img = document.createElement("img");
img.src = "coffee1.jpg";
var src = document.getElementById("cont");
src.appendChild(img);

//second card
//h3
var tag = document.createElement("h3");
var text = document.createTextNode("Camping Activities");
tag.appendChild(text);
var element = document.getElementById("cont");
element.appendChild(tag);

//p
var tag = document.createElement("p");
var text = document.createTextNode("Stargazing,CampfireCooking,CampfireStories,CampfireSongs,Hiking,Fishing,SurvivalChallenges");
tag.appendChild(text);
var element = document.getElementById("conts");
element.appendChild(tag);

//img
var img = document.createElement("img");
img.src = "sunrise.jpg";
var src = document.getElementById("conts");
src.appendChild(img);










