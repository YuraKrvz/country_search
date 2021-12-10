import {useState, useEffect} from 'react';
import {ALL_COUNTRIES } from '../config';

function ListCountries() {
   useEffect(()=>{
      fetch(ALL_COUNTRIES)
      .then((obj)=> console.log(obj))
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
