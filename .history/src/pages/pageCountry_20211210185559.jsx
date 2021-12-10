import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';


function PageCountry() {
   const [country, setCountry] = useState(null);
   const {name} = useParams();
   console.log(country)
   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/name/' + name)
      .then(res => res.json())
      .then(res => setCountry(res))
   }, [])

   return (
      <div>
         page country
      </div>
   )
}

export default PageCountry
