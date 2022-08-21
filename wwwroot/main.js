// Todo
// - Form to add a country to an existing or new continent
// - List to display all countries grouped by continent
// - Search for a country by name and display the results with the 
// continent information.


// For some reason, refering to this const dosen't work(?)
//const apiUrl = fetch("https://localhost:7028/api/Country/");

//  Fetch button
var getCountryData = document.getElementById('getDataButton');
getCountryData.addEventListener('click', fetchApiData);

async function fetchApiData(){
    console.log("Attempting to fetch data from api...")
    try{
        const respons = await fetch("https://localhost:7028/api/Country/");
        const responseData = await respons.json();
        // const responseDataParsed = JSON.stringify(responseData);
        console.log(responseData);

        for (let i = 0; i < responseData.length; i++){
            // iteration test. Just simple log
            // variable name of "c"X meaning country
            cName = responseData[i]["name"];
            cContinent = responseData[i]["continent"];
            console.log(cName + " is in contient: " + cContinent);
        }
        return responseData;
    }
    catch(error){
        console.log(error);
    }
}