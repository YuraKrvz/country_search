import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {ALL_COUNTRIES } from '../config';

const Section = styled.section`
   
`;
const Item = styled.div`
   width: 200px;
   height: 400px;
`;
const Img = styled.img`
   display: block;
   width: 100px;
   height: 100px;
`;
const Title = styled.h3`
   
`;
const Text = styled.p`

`;
const TextRegular = styled.p`

`;


function ListCountries() {
   const [countries, setCountries] = useState(null);

   useEffect(()=>{
      fetch(ALL_COUNTRIES)
      .then((res)=> res.json())
      .then(res => setCountries(res))
   }, [])
   console.log(countries)
   return (
      <Section>
         {countries && countries.map( c => (
            <Item key={c.name.common}>
               <Img src={c.coatOfArms.png} alt='' />
               <Title>{c.name.common}</Title>
               <span>
                  <Text>population</Text>
                  <TextRegular>{c.population}</TextRegular>
               </span>
               <span>
                  <Text>Region</Text>
                  <TextRegular>{c.region}</TextRegular>
               </span>
               <span>
                  <Text>Capital</Text>
                  <TextRegular>{c.capital}</TextRegular>
               </span>
            </Item>
         ))}
      </Section>
   )
}

export default ListCountries
