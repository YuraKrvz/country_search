import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';


function PageCountry() {
   const {name} = useParams();

   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/name/' + name)
      // .then(res => res.json())
      .then(res => console.log(res.json()))
      // .then(res = console.log(res))
   }, [])

   return (
      <div>
         page country
      </div>
   )
}

export default PageCountry
