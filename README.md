# CountryApi
#### Api in dotnet6
Api in dotnet6
# Welcome to **CountryApi*, a simple webapi written in ASP.NET6.
in the api you can:
- Get data about countries, such as a country's continent and population.
- Add new countries
- Search after a specific continent by name and get its corresponding continent.

## Techstack:
- **Backend:** .NETcore web-api, Uses swagger for testing api.
- **Frontend:** Html, css and javascript. Will migrate over to vuejs (future)
- **Database** Sqlite3

## Usage guide.
- The html pages are in wwwroot, go to localhost/index.html instead of swagger to view the actual page.
- Swagger will boot up on build, if you're using another port remember to change it in the js file on the async fetch functions.
- To see the html pages, go to localhost:YOUR_PORT/index.html, newCountry.html or searchCountry.html (There is a navbar for navigation).

## Current known issues
- Some lacking exception handling. 
- The fetch button in main.js dosen't clear previous fetched data-elements.
- searchCountryScript.js shows the entire error message in innerhtml instead of "Country not found"
- Dosen't check for duplicates and case sensitivity on data input&database.

## Future development / to do
- Implement better architecture
- Export data to CSV format for analysis in spreadsheet-software.
- Convert frontend to Vue.js
- Make a class continent to refer to continent in a country.
- Reformat and use more arrowfunctions.
- Unit testing
