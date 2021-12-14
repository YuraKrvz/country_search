import {searchOfCodeCountry} from '../config';
import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
   border: 2px solid black;
`;

function Neighbours({countries}) {
   const navigate = useNavigate();

   const handler = (c) => searchOfCodeCountry(c);

   return (
      <>
         {countries.map(country => (
            <ButtonLink 
               onClick={()=> handler(country)}
            >  
               {country}
            </ButtonLink>
         ))}  
      </>
   )
}

export default Neighbours
