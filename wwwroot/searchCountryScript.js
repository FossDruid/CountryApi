var searchBtn = document.getElementById('inputSubmitBtn');
var countryTxtField = document.getElementById('inputName');
var apiResponseContinentTxt = document.getElementById('dataResponseContinent');
searchBtn.addEventListener('click', fetchApiContinentData)


async function fetchApiContinentData(){
    console.log("Attempting to fetch data from api...");
    try {
        var wantedCountryInput = countryTxtField.value;

        var responseData = await fetch(("https://localhost/api/Country/" + wantedCountryInput));
        var responseData = await respons.json();
        console.log(responseData);
        apiResponseContinentTxt.innerHTML = responseData;

        return responseData;
    }
    catch(error){
        console.log(error);
    }
}