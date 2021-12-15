import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';
import {ALL_COUNTRIES } from '../config';

function PageHome() {
   const [countries, setCountries] = useState();
   const [filteredCountries, setFilteredCountries] = useState(countries);
   const [search, setSearch] = useState('');
   const [searchSelect, setSearchSelect] = useState('');

   const handlerSearch = (name, region)=> {
      if(name){
         setSearch(name)
         setFilteredCountries( countries.filter(item => item.name.common.includes(name)) );
      }
      if(region){
         console.log(region)
         setSearchSelect(region)
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
      <select name="region" value={searchSelect} onChange={(e)=> handlerSearch(null, e.target.value)}>
         <option value="select" disabled>"Select"</option>
         <option value="africa">"Africa"</option>
         <option value="americas">"Americas"</option>
         <option value="asia">"Africa"</option>
         <option value="europe">"Africa"</option>
         <option value="oceania">"Oceania"</option>
      </select>
         <ListCountries countries={filteredCountries} />
      </div>
   )
}

export default PageHome