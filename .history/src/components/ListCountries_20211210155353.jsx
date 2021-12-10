import {useState, useEffect} from 'react';
import {ALL_COUNTRIES } from '../config';

function ListCountries() {
   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
      .then((obj)=> obj.json())
      .then(obj => console.log(obj[10].name.common))
   }, [])

   return (
      <ul>
        <li>1</li> 
        <li>1</li> 
        <li>1</li> 
        <li>1</li> 
        <li>1</li> 
      </ul>
   )
}

export default ListCountries
