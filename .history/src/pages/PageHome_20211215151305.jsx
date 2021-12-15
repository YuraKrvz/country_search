import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';
import {ALL_COUNTRIES } from '../config';

function PageHome() {
   const [countries, setCountries] = useState();
   conts [filteredCountries, setFilteredCountries] = useState(countries);
  
   useEffect( ()=>{
     fetch(ALL_COUNTRIES)
     .then(res=> res.json())
     .then(res => setCountries(res))
   }, [] );

   return (
      <div>
         <ListCountries countries={filteredCountries} setCountries={setFilteredCountries} />
      </div>
   )
}

export default PageHome