# CountryApi
Api in dotnet6

# CountryApi
Api in dotnet6
  
* Welcome to CountryApi, a simple dotnet6 webapi written in dotnet.
in the api you can:
- Get data about countries, such as a country's continent and population.
- Add new countries
- Search after a specific continent by name and get its corresponding continent.

* Techstack:
- C#.NETcore6 web api (Backend), Uses swagger for testing api.
- Html, css and javascript (Frontend). Will migrate over to vuejs (future)
- Sqlite3 (Database)

* Usage guide.
- Swagger will boot up on build, if you're using another port remember to change it in the js file on the async fetch functions.
- To see the html pages, go to localhost:YOUR_PORT/index.html, newCountry.html or searchCountry.html (There is a navbar for navigation).

* Current known issues
- 

* Future development / to do
- Export data to CSV format for analysis in spreadsheet-software.
- Convert frontend to Vue.js
- Make a class continent to refer to continent in a country.
- Reformat and use more arrowfunctions.
- Unit testing
