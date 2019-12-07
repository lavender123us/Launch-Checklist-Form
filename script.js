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

window.addEventListener("DOMContentLoaded", function init() {
   
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
      //if (isNaN(pilotNameInput || copilotNameInput)===false)
         alert("Input shoud be a string.");

      if (fuelLevelInput != Number() || cargoMassInput != Number())
      //if (isNaN(fuelLevelInput || cargoMassInput)===true)
         alert("Input shoud be a number.");

   })

   // let statusCheck = document.getElementById("faultyItems");
   // statusCheck.addEventListener("load", function(event) {      

      let pilotCheck = document.getElementById("pilotStatus");
      pilotCheck.addEventListener("input", function(event) {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput }Ready`
         console.log(pilotStatus.innerHTML);
      })

      let copilotCheck = document.getElementById("copilotStatus");
      copilotCheck.innerHTML = `Copilot ${copilotNameInput }Ready`

      //let launchStatusCheck = document.getElementById("launchStatus");

      let fuelCheck = document.getElementById("fuelLevel");
      let fuelStatus = document.getElementById("fuelStatus");

      if (fuelLevelInput.value < 10000) {             
         fuelCheck.addEventListener("submit", function changeText(event) {         
         fuelStatus.textContent = "There is not enough fuel for the journey.";
         document.getElementById("fuelStatus").style.visibility = "visible";            
         })
      }
      
      let cargoCheck = document.getElementById("cargoMass");
      let cargoStatus = document.getElementById("cargoStatus");   
   
      if (cargoMassInput.value > 10000) {
         cargoCheck.addEventListener("submit", function changeText(event) {         
         cargoStatus.textContent = "There is too much mass for the shuttle to take off.";         
         document.getElementById("cargoStatus").style.visibility = "visible";
         })
      }      

      if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {   
         launchStatus.addEventListener("submit", function changeText(event) {
            launchStatus.textContent = "Shuttle not ready for launch";
            launchStatus.style.color = 'red';
         })
      }
   //})
   
   event.preventDefault();
})