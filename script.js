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

window.addEventListener("load", function () {
   //console.log("loaded");
   
   let launchForm = document.getElementById("launchForm");

   let pilotName = document.getElementById(id="pilotName");
   let copilotName = document.getElementById(id="copilotName");
   let fuelLevel = document.getElementById(id="fuelLevel");
   let cargoMass = document.getElementById(id="cargoMass");
   
   launchForm.addEventListener("submit", function(event) {

      event.preventDefault();
      //console.log("submitted");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required");
      }      
      
      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert("Only Characters shoud be used for names.");
      }
     
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Fuel / Mass shoud be a number.");   
      }           
   
   })

   //let statusCheck = document.getElementById("launchStatusCheck");
   launchForm.addEventListener("submit", function(event) {
      //console.log("submitted");

      let items = document.getElementById("faultyItems");
      items.style.visibility = "visible";
      
      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value}  Ready`
      
      let copilotStatus = document.getElementById("copilotStatus");    
      copilotStatus.innerHTML = `Copilot ${copilotName.value}  Ready`      

      let fuelStatus = document.getElementById("fuelStatus");
      if (fuelLevel.value < 10000) {                
         fuelStatus.textContent = "There is not enough fuel for the journey.";                          
      }

      let cargoStatus = document.getElementById("cargoStatus");
      if (cargoMass.value > 10000) {         
         cargoStatus.textContent = "There is too much mass for the shuttle to take off.";     
      }

      let displayStatus = document.getElementById("launchStatus");    
      
      if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
         displayStatus.innerHTML = "Shuttle not ready for launch";
         displayStatus.style.color = 'red';
      }
   
      if (fuelLevel.value > 10000 && cargoMass.value < 10000) {         
         displayStatus.innerHTML = "Shuttle is ready for launch";
         displayStatus.style.color = 'green';
      }  
   }) 

      
   // let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionDestination = document.getElementById("missionTarget");
         console.log(json);
         launchForm.addEventListener("submit", function() {
            for (let i=0; i<json.length; i++) {
               //console.log(missionDestination.innerHTML);
               //console.log(json[5])
               missionDestination.innerHTML = `         
               
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[i].name}</li>
                  <li>Diameter: ${json[i].diameter}</li>
                  <li>Star: ${json[i].star}</li>
                  <li>Distance from Earth: ${json[i].distance}</li>
                  <li>Number of Moons: ${json[i].moons}</li>
               </ol>
               <img src="${json[i].image}">   
               `;
            console.log(json[5].name);
            }
         })
      })
   })
})