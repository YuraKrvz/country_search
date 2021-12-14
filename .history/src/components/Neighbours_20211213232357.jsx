import {useState} from 'react';
import {searchOfCodeCountry} from '../config';
import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
   border: 2px solid black;
`;

function Neighbours({countries}) {
   // const [neighbours, setNeighbours] = useState([]);
   // const navigate = useNavigate();

   // useEffect(()=>{
   //    let links = [...countries];
   //       links = links.map(c => searchOfCodeCountry(c))
   //    console.log(links)
   //    setNeighbours(links)
   //    // setNeighbours(countries.map(item => searchOfCodeCountry(item)));
   //    // setNeighbours(countries.map(c => searchOfCodeCountry(c)));
   //    console.log(neighbours)
   // },[navigate])
   // console.log(neighbours)

   // const handler = (c) => searchOfCodeCountry(c);

   return (

      <>
         {/*countries.map(country => (
            <ButtonLink 
               key={country} 
               // onClick={()=> handler(country)}
               // to={`/country/${}`}
            >  
               {country}
            </ButtonLink>
         ))*/}  
         // {      console.log(neighbours)}
         <h6>component</h6>
         {neighbours.map(i => <ButtonLink to={`/country/${i}`}>{i}</ButtonLink>)}
      </>
   )
}

export default Neighbours;