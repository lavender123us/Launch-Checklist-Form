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
   
   let form = document.getElementById("launchForm");

   let pilotNameInput = document.getElementById(id="pilotName");
   let copilotNameInput = document.getElementById(id="copilotName");
   let fuelLevelInput = document.getElementById(id="fuelLevel");
   let cargoMassInput = document.getElementById(id="cargoMass");
   
   form.addEventListener("submit", function(event) {      

      //newFunction(pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") 
         alert("All fields are required");
      
      if (!= isNaN(pilotNameInput.value) || != isNaN(copilotNameInput.value))
         alert("String shoud be used for name.");
     
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value))
         alert("Fuel / Mass shoud be a number.");

   console.log(pilotNameInput.value);
   console.log(typeof pilotNameInput.value);
   

   event.preventDefault();
   })
})

//    // let statusCheck = document.getElementById("faultyItems");
//    // statusCheck.addEventListener("load", function(event) {      

// let pilotCheck = document.getElementById("pilotStatus");
// pilotCheck.addEventListener("load", function(event) {
//    pilotStatus.innerHTML = `Pilot ${pilotNameInput }Ready`
//    console.log(pilotStatus.innerHTML);
// })

// let copilotCheck = document.getElementById("copilotStatus");
// copilotCheck.addEventListener("load", function(event) {
//    copilotStatus.innerHTML = `Copilot ${copilotNameInput }Ready`
// })

//    //let launchStatusCheck = document.getElementById("launchStatus");

// let fuelCheck = document.getElementById("fuelLevel");
// let fuelStatus = document.getElementById("fuelStatus");

// if (fuelLevelInput.value < 10000) {             
//    fuelCheck.addEventListener("submit", function changeText(event) {         
//    fuelStatus.textContent = "There is not enough fuel for the journey.";
//    document.getElementById("fuelStatus").style.visibility = "visible";            
//    })
// }

// let cargoCheck = document.getElementById("cargoMass");
// let cargoStatus = document.getElementById("cargoStatus");   

// if (cargoMassInput.value > 10000) {
//    cargoCheck.addEventListener("submit", function changeText(event) {         
//    cargoStatus.textContent = "There is too much mass for the shuttle to take off.";         
//    document.getElementById("cargoStatus").style.visibility = "visible";
//    })
// }      

// if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {   
//    launchStatus.addEventListener("submit", function changeText(event) {
//       launchStatus.textContent = "Shuttle not ready for launch";
//       launchStatus.style.color = 'red';
//    })
// }

// if (fuelLevelInput.value > 10000 || cargoMassInput.value < 10000) {   
//    launchStatus.addEventListener("submit", function changeText(event) {
//       launchStatus.textContent = "Shuttle is ready for launch";
//       launchStatus.style.color = 'green';
//    })
// }


// window.addEventListener("load", function(event) {
//    let json = [];
//    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
//       response.json().then(function(json) {
//          let missionDestination = getElementById("missionTarget");
//          missionTarget.addEventListener("click", function() {
//             for (let i=0; i<missionTarget.length; i++) {
//                missionTarget.innerHTML = `         
               
//                <h2>Mission Destination</h2>
//                <ol>
//                   <li>Name: ${json.name[i]}</li>
//                   <li>Diameter: ${json.diameter[i]}</li>
//                   <li>Star: ${json.star[i]}</li>
//                   <li>Distance from Earth: ${json.distance[i]}</li>
//                   <li>Number of Moons: ${json.moons[i]}</li>
//                </ol>
//                <img src="${jsom.image[i]}">   
//                `;
//             }
//          })
//       })
//    })
// console.log(json[1]); 
// })
    