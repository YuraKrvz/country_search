import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';
import {ALL_COUNTRIES } from '../config';

function PageHome() {
   const [countries, setCountries] = useState();
   let arr = [...countries];
  
   useEffect( ()=>{
     fetch(ALL_COUNTRIES)
     .then(res=> res.json())
     .then(res => setCountries(res))
   }, [] );

   return (
      <div>
         <ListCountries countries={filteredCountries} />
      </div>
   )
}

export default PageHome