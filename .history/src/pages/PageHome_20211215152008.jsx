import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';
import {ALL_COUNTRIES } from '../config';

function PageHome() {
   const [countries, setCountries] = useState();
   const [search, setSearch] = useState();
   
  
   useEffect( ()=>{
     fetch(ALL_COUNTRIES)
     .then(res=> res.json())
     .then(res => setCountries(res))
   }, [] );

   return (
      <div>
      <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" />
         <ListCountries countries={countries} />
      </div>
   )
}

export default PageHome