using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Xml.Linq;

namespace CountryApi.Controllers{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase {
        /* Manual local test
        private static List<Country> country = new List<Country>{
                new Country{                
                    id=1, 
                    name="Norway", 
                    population=500, 
                    continent="Europe"
                    },
                new Country{
                    id=2,
                    name="United States of America",
                    population=6000,
                    continent="Europe",
                }
            };

       */
        private readonly CountryContext countryContext;

        public CountryController(CountryContext countryContext) {
            this.countryContext = countryContext;
        }

        // use try and catch stuff!!!

        [HttpGet]
        public async Task<ActionResult<List<Country>>> Get() {
            return Ok(await countryContext.Countries.ToListAsync());
        }

        // Returns country by given id
        [HttpGet("id/{id}")]
        public async Task<ActionResult<List<Country>>> Get(int id) {
            var idCountry = countryContext.Countries.FindAsync(id);
            if (idCountry == null)
                return BadRequest("Country not found)");
            return Ok(await idCountry);
        }

        [HttpGet("{name}")]
        public ActionResult<Country> Get(string name)
        {
            if (countryContext == null)
            {
                return BadRequest()
                Country countries = countryContext.Countries.FirstOrDefault(p => p.name == name);
                if(countries == null)
                {
                    return BadRequest("Country not found");
                }
                return Ok(countries.continent);
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<ActionResult<List<Country>>> AddCountry(Country newCountry){
            this.countryContext.Add(newCountry);
            await this.countryContext.SaveChangesAsync();

            return Ok(await this.countryContext.Countries.ToListAsync());
        }



        [HttpPut]
        public async Task<ActionResult<List<Country>>> UpdateCountry(Country request){
            var dbCountry= await this.countryContext.Countries.FindAsync(request.id);
            if(dbCountry== null)
                return BadRequest("Country not found)");
            
            dbCountry.name = request.name;
            dbCountry.population = request.population;
            dbCountry.continent = request.continent;

            // save changes
            await this.countryContext.SaveChangesAsync();
            return Ok(await this.countryContext.Countries.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Country>>> Delete(int id){
            var dbCountry = await this.countryContext.Countries.FindAsync(id);
            if(dbCountry == null)
                return BadRequest("Country not found)");
            
            this.countryContext.Countries.Remove(dbCountry);
            await this.countryContext.SaveChangesAsync();

            return Ok(await this.countryContext.Countries.ToListAsync());
        }
    }
}