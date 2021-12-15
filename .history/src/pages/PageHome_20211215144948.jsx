import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';

function PageHome({countries}) {
   const [filteredCountries, setFilteredCountries] = useState();

   useEffect(()=>{
      setFilteredCountries(countries);
   }, [filteredCountries])

   return (
      <div>
         <ListCountries filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries} />
      </div>
   )
}

export default PageHome