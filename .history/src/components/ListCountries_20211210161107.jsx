import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {ALL_COUNTRIES } from '../config';

const Section = styled.section`
   
`;
const Item = styled.div`
   
`;
const Img = styled.img`

`;
const Title = styled.h3`
   
`;
const Title = styled.h3`

`;


function ListCountries() {
   const [countries, setCountries] = useState(null);

   useEffect(()=>{
      fetch(ALL_COUNTRIES)
      .then((res)=> res.json())
      .then(res => setCountries(res))
   }, [])
   console.log(countries[0].name.common)
   return (
      <div>

      </div>
   )
}

export default ListCountries
