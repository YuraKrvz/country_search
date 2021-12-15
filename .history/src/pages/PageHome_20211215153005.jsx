import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';
import {ALL_COUNTRIES } from '../config';

function PageHome() {
   const [countries, setCountries] = useState();
   const [filteredCountries, setFilteredCountries] = useState(countries);
   const [search, setSearch] = useState('');

   const handler = (e)=> {
      setSearch(e.target.value)
      
      setFilteredCountries( countries.filter(item => item.name.common === search) );

      console.log(filteredCountries)
   }
   
   useEffect( ()=> {
     fetch(ALL_COUNTRIES)
     .then(res=> res.json())
     .then(res => setCountries(res))

   }, [] );

   useEffect(()=> {
      setFilteredCountries(countries)
   }, [countries])

   return (
      <div>
      <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" />
      <button onClick={handler}>search</button>
         <ListCountries countries={filteredCountries} />
      </div>
   )
}

export default PageHome