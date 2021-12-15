import {useState, useEffect} from 'react';
import ListCountries from '../components/ListCountries';

function PageHome({countries}) {
   const [filteredCountries, setFilteredCountries] = useState();
   useEffect(()=>{
      setFilteredCountries(countries);
   })
   return (
      <div>
         <ListCountries filteredCountries={filteredCountries} />
      </div>
   )
}

export default PageHome