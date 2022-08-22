var searchBtn = document.getElementById('inputSubmitBtn');
var countryTxtField = document.getElementById('inputName');
var apiResponseContinentTxt = document.getElementById('dataResponseContinent');
searchBtn.addEventListener('click', fetchApiContinentData)


async function fetchApiContinentData(){
    console.log("Attempting to fetch data from api...");
    try {
        var wantedCountryInput = countryTxtField.value;

        var response = await fetch("https://localhost:7028/api/Country/" + wantedCountryInput);
        console.log(response);
        var responseData = await response.json();
        console.log(responseData);
        apiResponseContinentTxt.innerHTML = responseData;

        return responseData;
    }
    catch(error){
        console.log(error);
    }
}