import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';
import {ALL_COUNTRIES } from '../config';

function PageHome() {
   const [countries, setCountries] = useState();
   
  
   useEffect( ()=>{
     fetch(ALL_COUNTRIES)
     .then(res=> res.json())
     .then(res => setCountries(res))
   }, [] );

   return (
      <div>
         <ListCountries countries={countries} />
      </div>
   )
}

export default PageHome