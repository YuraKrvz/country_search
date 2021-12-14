import {searchOfCodeCountry} from '../config';

function Neighbours({countries}) {
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
