// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {

   // let button = document.getElementById("formSubmit");
   // button.addEventListener('click', function(event) {
   //    let input = document.getElementById("string");
   //    console.log(input.value);
   // })

   let launchForm = document.getElementById("launchForm");
   launchForm.addEventListener("submit", function(event) {      
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");
      if (pilotNameInput === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") 
         alert("All fields are required");
      event.preventDefault();
   })
   alert();
})