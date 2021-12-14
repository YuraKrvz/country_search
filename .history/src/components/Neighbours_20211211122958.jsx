import {searchOfCodeCountry} from '../config';
import { Link, useNavigate} from 'react-router-dom';

function Neighbours({countries}) {
   const navigate = useNavigate();

   const handler = (c) => searchOfCodeCountry(c);

   return (
      <>
         {countries.map(country => (
            <button 
               onClick={()=> handler(country)}
            >  
               {country}
            </button>
         ))}  
      </>
   )
}

export default Neighbours
