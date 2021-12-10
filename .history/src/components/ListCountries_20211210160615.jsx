import {useState, useEffect} from 'react';
import {ALL_COUNTRIES } from '../config';

function ListCountries() {
   const [countries, setCountries] = useState(null);

   useEffect(()=>{
      fetch(ALL_COUNTRIES)
      .then((obj)=> obj.json())
      .then(obj => setCountries(obj))
      
   }, [])
   console.log(countries)
   return (
      <ul>
        <li></li> 
        <li>1</li> 
        <li>1</li> 
        <li>1</li> 
        <li>1</li> 
      </ul>
   )
}

export default ListCountries
