import {useState, useEffect} from 'react';
import {ALL_COUNTRIES } from '../config';

function ListCountries() {
   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then((obj)=> console.log(JSON.parse(obj)))
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
