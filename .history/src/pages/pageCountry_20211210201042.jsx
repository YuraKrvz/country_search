import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';
import styled from 'styled-components';

const Item = styled.div`
   display: flex;
   justify-content: center; 
   // padding: 10px auto;
   width: 700px;
   border: 1px solid black;
`;
const Inner = styled.div`
   & > span {
      display: flex;
   }
`;
const Img = styled.img`
   margin-top: 10px;
   margin-кшпре: 10px;
   width 250px;
   height: 150px;
`;
// const Wrapper = styled.div`

// `;


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
                     <p>population</p>
                     <p>{country.population}</p>
                  </span>
                  <span>
                     <p>Region</p>
                     <p>{country.region}</p>
                  </span>
                  <span>
                     <p>Capital</p>
                     <p>{country.capital}</p>
                  </span>
               </Inner>
            </>}
      </Item>
   )
}

export default PageCountry
