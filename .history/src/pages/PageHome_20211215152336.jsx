import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';
import {ALL_COUNTRIES } from '../config';

function PageHome() {
   const [countries, setCountries] = useState();
   const [filteredCountries, setFilteredCountries] = useState();
   const [search, setSearch] = useState('');

   const handler = (e)=> {
      setSearch(e.target.value)
      setFilteredCountries( countries.filter(item => item.name.common === search) );
      console.log(filteredCountries)
   }
   
  
   useEffect( ()=>{
     fetch(ALL_COUNTRIES)
     .then(res=> res.json())
     .then(res => setCountries(res))
   }, [] );

   return (
      <div>
      <input value={search} onChange={handler} type="text" />
         <ListCountries countries={countries} />
      </div>
   )
}

export default PageHome