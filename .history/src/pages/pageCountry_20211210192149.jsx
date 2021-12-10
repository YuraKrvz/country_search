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
         <img src={c.flags.png} alt='flag of country' />
      <h4>{c.name.common}</h4>
               <span>
                  <p>population</p>
                  <p>{c.population}</p>
               </span>
               <span>
                  <p>Region</p>
                  <p>{c.region}</p>
               </span>
               <span>
                  <p>Capital</p>
                  <p>{c.capital}</p>
               </span>
      </div>
   )
}

export default PageCountry
