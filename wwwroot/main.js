// Todo
// functions:
// - Form to add a country to an existing or new continent
// - List to display all countries grouped by continent
// - Search for a country by name and display the results with the
// continent information.
// make library of fetch command? need to make it reusable!

// - Clear created dataTable elements upon re-clicking the fetch button.

//  Code cleanup:
//  Check - Issue 5

//  Fetch button
var getCountryData = document.getElementById('getDataButton');
var countryTableContainer = document.getElementById('tableContainer');
getCountryData.addEventListener('click', fetchApiData);

async function fetchApiData() {
    // clear previous fetch data

    console.log("Attempting to fetch data from api...")
    try{
        const respons = await fetch("https://localhost:7028/api/Country/");
        var responseData = await respons.json();

        // Variable for sorting alphabetically
        var sortedJsonData = responseData;
        sortedJsonData.sort(function (a, b) {
            var contA = a.continent.toUpperCase();
            var contB = b.continent.toUpperCase();

            return contA.localeCompare(contB);
        });
        console.log(sortedJsonData);

        // const responseDataParsed = JSON.stringify(responseData);
        console.log(responseData);

        // Iterates through api data and displays it. Hacky but works for now.
        for (let i = 0; i < responseData.length; i++){
            // iteration test. Just simple log
            // variable name of "c"X meaning country
            cName = responseData[i]["name"];
            cContinent = responseData[i]["continent"];
            cPopulation = responseData[i]["population"];
            cId = responseData[i]["id"];
            console.log(cName + " is in contient: " + cContinent);
            //  Array for iteration
            var dataArr = [cId, cContinent, cPopulation, cName];

            //  Data table display
            var displayTable = document.getElementById('countryTable');
            var row = displayTable.insertRow(1);
            
            //  Issue 5: Assigns id to all th elements, make it assign to tr instead!
            for(let j=0; j < dataArr.length; j++){
                row.insertCell(0).outerHTML = '<th class="dataTable" id="dataTableId' + i + '">' + dataArr[j] +
                    '</th>';
            }
        }
        return responseData;
    }
    catch(error){
        console.log(error);
    }
}

function clearDataHtmlElements() {
    var htmlDataTableNodes = document.getElementById('dataTableId21');
    htmlDataTableNodes.innerHTML = "Hello";
    alert("WORKS");
}

