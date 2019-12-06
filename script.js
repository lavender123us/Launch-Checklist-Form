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

   
   let form = document.getElementById("launchForm");

   let pilotNameInput = document.getElementById(id="pilotName");
   let copilotNameInput = document.getElementById(id="copilotName");
   let fuelLevelInput = document.getElementById(id="fuelLevel");
   let cargoMassInput = document.getElementById(id="cargoMass");
   
   form.addEventListener("submit", function(event) {      

      //newFunction(pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);

      if (pilotNameInput === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") 
         alert("All fields are required");
      
      if (pilotNameInput != String() || copilotNameInput != String())
         alert("Input shoud be a string.");

      if (fuelLevelInput != Number() || cargoMassInput != Number())
         alert("Input shoud be a number.")

   })

   // let statusCheck = document.getElementById("faultyItems");
   // statusCheck.addEventListener("load", function(event) {
      
   // })

   // let pilotCheck = document.getElementById("pilotStatus");
   // pilotCheck.addEventListener("", function(event) {

   // })

   // let copilotCheck = document.getElementById("copolotStatus");
   // copilotCheck.addEventListener("", function(event) {

   // })
 
   let launchStatus = document.getElementById("launchStatus");

   let fuelCheck = document.getElementById("fuelLevel");
   
   let fuelStatus = document.getElementsById("fuelStatus");

   let cargoCheck = document.getElementById("cargoMass");

   let cargoStatus = document.getElementById("cargoStatus");


   if (fuelLevelInput.value < 10000) {
      document.getElementById("fuelStatus").style.visibility = "visible";      

      fuelCheck.addEventListener("click", function changeText(event) {
         
         fuelStatus.textContent = "There is not enough fuel for the journey.";                
      })
   }   
   
   if (cargoMassInput.value > 10000) {
      document.getElementById("fuelStatus").style.visibility = "visible";

      cargoCheck.addEventListener("click", function changeText(event) {         
         cargoStatus.textContent = "There is too much mass for the shuttle to take off.";
      })

   }      

   if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {      
      launchStatus.textContent = "Shuttle not ready for launch";
      launchStatus.style.color = 'red';
   }

   event.preventDefault();
})