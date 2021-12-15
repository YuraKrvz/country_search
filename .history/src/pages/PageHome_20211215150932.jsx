import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';

function PageHome() {
   const [countries, setCountries] = useState();
  
   useEffect(()=>{
     fetch(ALL_COUNTRIES)
     .then(res=> res.json())
     .then(res => setCountries(res))
   }, []);

   return (
      <div>
         <ListCountries filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries} />
      </div>
   )
}

export default PageHome