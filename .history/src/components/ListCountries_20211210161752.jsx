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
         {countries.map( c => (
            <Item key={123}>
               <Img src='' alt='' />
               <Title></Title>
               <span>
                  <Text></Text>
                  <TextRegular></TextRegular>
               </span>
               <span>
                  <Text></Text>
                  <TextRegular></TextRegular>
               </span>
               <span>
                  <Text></Text>
                  <TextRegular></TextRegular>
               </span>
            </Item>
         ))}
      </Section>
   )
}

export default ListCountries
