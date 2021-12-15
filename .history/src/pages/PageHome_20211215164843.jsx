import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';
import {ALL_COUNTRIES } from '../config';

function PageHome() {
   const [countries, setCountries] = useState();
   const [filteredCountries, setFilteredCountries] = useState(countries);
   const [search, setSearch] = useState('');

   const handlerSearch = (name)=> {
      setSearch(name)
      
      if(name){
         setFilteredCountries( countries.filter(item => item.name.common.includes(name)) );
      }

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

      <input value={search} onChange={(e)=> handlerSearch(e.target.value)} type="text" />
      <select name="" id=""></select>
         <ListCountries countries={filteredCountries} />
      </div>
   )
}

export default PageHome