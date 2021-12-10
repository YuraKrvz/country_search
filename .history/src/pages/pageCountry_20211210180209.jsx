import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';


function PageCountry() {
   const {name} = useParams();

   useEffect(()=>{
      fetch(()=> )
   }, [])
   return (
      <div>
         page country
      </div>
   )
}

export default PageCountry
