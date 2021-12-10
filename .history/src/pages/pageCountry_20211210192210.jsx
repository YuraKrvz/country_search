import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';


function PageCountry() {
   const [country, setCountry] = useState(null);
   const {name} = useParams();
   
   console.log(country)

   useEffect(()=>{
      fetch(searchCountry(name))
      .then(res => res.json())
      .then(res => setCountry(res[0]))
   }, [])

   return (
      <div>
         <img src={country.flags.png} alt='flag of country' />
      <h4>{country.name.common}</h4>
               <span>
                  <p>population</p>
                  <p>{country.population}</p>
               </span>
               <span>
                  <p>Region</p>
                  <p>{country.region}</p>
               </span>
               <span>
                  <p>Capital</p>
                  <p>{country.capital}</p>
               </span>
      </div>
   )
}

export default PageCountry
