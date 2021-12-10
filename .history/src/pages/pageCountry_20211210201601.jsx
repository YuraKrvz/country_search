import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';
import styled from 'styled-components';

const Item = styled.div`
   display: flex;
   justify-content: center; 
   width: 700px;
   margin: 30px auto;
   box-shadow: var(--shadow);
`;
const Inner = styled.div`
   & > span {
      display: flex;
      margin-right: 10px;
   }
`;
const Img = styled.img`
   margin-top: 10px;
   margin-right: 30px;
   width 250px;
   height: 150px;
`;
const Text = styled.p`
   margin-right: 20px;
`;


function PageCountry() {
   const [country, setCountry] = useState(null);
   const {name} = useParams();
   
   console.log(country)

   useEffect(()=>{
      fetch(searchCountry(name))
      .then(res => res.json())
      .then(res => setCountry(res[0]))
   }, [])

   return (
      <Item>
         {country && <>
               <Img src={country.flags.png} alt='flag of country' />
               <Inner>
                  <h4>{country.name.common}</h4>
                  <span>
                     <Text>population:</Text>
                     <Text>{country.population}</Text>
                  </span>
                  <span>
                     <Text>Region:</Text>
                     <Text>{country.region}</Text>
                  </span>
                  <span>
                     <Text>Capital:</Text>
                     <Text>{country.capital}</Text>
                  </span>
               </Inner>
            </>}
      </Item>
   )
}

export default PageCountry
