import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchToggle from './SearchToggle';

const Section = styled.section`
   width: 1100px;
   margin: 30px auto;
   display: flex;
   flex-wrap: wrap;
   
   @media (max-width: 1284px){
      width: 1000px;
   }
   @media (max-width: 1015px){
      width: 800px;
   }
   @media (max-width: 840px){
      width: 600px;
   }
`;
const ItemLink = styled(Link)`
   padding: 10px;
   margin: 10px;
   width: 200px;
   height: 300px;
   box-shadow: var(--shadow);
   text-decoration: none;
   color: var(--colors-text);

   & > span {
      display: flex;
   }
`;
const Img = styled.img`
   margin: 0 auto;
   display: block;
   width: 150px;
   height: 100px;
`;
const Title = styled.h3`
   font-size: var(--font-md);
   font-weight: var(--fw-bold);
`;
const Text = styled.p`
   font-size: var(--font-sm);
   font-weight: var(--fw-bold);
   margin-right: 10px;
   text-decoration: underline;
`;
const TextRegular = styled.p`
   font-size: var(--font-sm);
   font-weight: var(--fw-light);
`;


function ListCountries({countries}) {
   const [filteredCountries, setFilteredCountries] = useState();
   console.log(countries)
   useEffect(()=>{
      setFilteredCountries(countries)
   },[filteredCountries])

   console.log(filteredCountries)

   const handler = (name) => {
      const arr = new Array(countries);
      arr.find(item => console.log(item));
      console.log(arr)

      setFilteredCountries(arr);
   };
   
   return (
      <Section>
      <SearchToggle handler={handler} />
         {filteredCountries && filteredCountries.map( c => (
            <ItemLink key={c.name.common} to={`/country/${c.name.common}`}>
               <Img src={c.flags.png} alt='flag of country' />
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
            </ItemLink>
         ))}
      </Section>
   )
}

export default ListCountries;