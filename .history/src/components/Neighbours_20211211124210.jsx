import {useState, useEffect} from 'react';
import {searchOfCodeCountry} from '../config';
import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
   border: 2px solid black;
`;

function Neighbours({countries}) {
   const [neighbours, setNeighbours] = useState(countries);
   const navigate = useNavigate();

   // useEffect(()=>{
   //    setNeighbours(countries)
   // },[])

   const handler = (c) => searchOfCodeCountry(c);

   return (
      <>
         {countries.map(country => (
            <ButtonLink 
               key={country} 
               onClick={()=> handler(country)}
               // to={`/country/${}`}
            >  
               {country}
            </ButtonLink>
         ))}  
      </>
   )
}

export default Neighbours
