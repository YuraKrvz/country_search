import {searchOfCodeCountry} from '../config';

function Neighbours({countries}) {
   const handler = () => ;
   return (
      <>
         {countries.map(country => <button onClick={handler}>{country}</button>)}  
      </>
   )
}

export default Neighbours
