var getCountryContinentData = document.getElementById('getDataButton');
var countryContinentWrapper = document.getElementById('fetchIdWrapper');
getCountryContinentData.addEventListener('click', fetchApiContinentData);

async function fetchApiContinentData(){
    console.log("Attempting to fetch data from api...");
    try{
        const respons = await fetch("https://localhost:7028/api/Country/");
        var responseData = await respons.json();

        // const responseDataParsed = JSON.stringify(responseData);
        console.log(responseData);

        // Iterates through api data and displays it. Hacky but works for now.
        for (let i = 0; i < responseData.length; i++){
            // iteration test. Just simple log
            // variable name of "c"X meaning country
            cName = responseData[i]["name"];
            cContinent = responseData[i]["continent"];
            cId = responseData[i]["id"];
            console.log(cName + " is in contient: " + cContinent);
            //  Array for iteration
            //  var dataArr = [cId, cContinent, cPopulation, cName];
            //  Data table display
        }
        return responseData;
    }
    catch(error){
        console.log(error);
    }
}