// TODO
// - Clear textfield on submit
// - Check db if country exists


document.getElementById('inputName');
document.getElementById('inputPopulation');
document.getElementById('inputContinent');
/*
async function fetchApiData(){
    console.log("Attempting to fetch data from api...")
    try{
        const respons = await fetch("https://localhost:7028/api/Country/");
        var responseData = await respons.json();

        // const responseDataParsed = JSON.stringify(responseData);
        //console.log(responseData);

        return responseData;
    }
    catch(error){
        console.log(error);
    }
}
*/
async function postSubmitData(){
    const response = await fetch("https://localhost:7028/api/Country/");
    
    console.log("posting your data to api...")
    var postData = JSON.stringify({
        "name": document.getElementById("inputName").value,
        "population": document.getElementById("inputPopulation").value,
        "continent": document.getElementById("inputContinent").value
    });
    fetch('https://localhost:7028/api/Country/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: postData
    })
        .then(respone => response.json())
        .then(json => console.log())
        // Concatenate this
        .then(postStatusTextP.innerHTML = "Data of: " + postData + " | added successfully.")
        .catch(error => console.log(error))
        console.log("Data added");
        

}
var postStatusTextP = document.getElementById('postStatusText');
var submitDataButton = document.getElementById('inputSubmitBtn');
submitDataButton.addEventListener('click', postSubmitData);