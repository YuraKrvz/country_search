import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
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
   margin-top: 20px;
   margin-right: 30px;
   width 250px;
   height: 150px;
`;
const Text = styled.p`
   margin-right: 20px;
   text-decoration: underline;
`;
const ButtonLink = styled.a`
border: 2px solid black;
`;


function PageCountry() {
   const [country, setCountry] = useState(null);
   const [borders, setBorders] = useState(null);
   const {name} = useParams();
   
   console.log(country)
   console.log(borders)

   useEffect(()=>{
      fetch(searchCountry(name))
      .then(res => res.json())
      .then(res => {
         setCountry(res[0]);
         if(res[0].borders.length){
            setBorders(res[0].borders)
         }
      })
   }, [])

   return (
      <>
         <Item>
            {country && <>
                  <Img src={country.flags.png} alt='flag of country' />
                  <Inner>
                     <h4>{country.name.common}</h4>
                     <span>
                        <Text>population:</Text>
                        <p>{country.population}</p>
                     </span>
                     <span>
                        <Text>Region:</Text>
                        <p>{country.region}</p>
                     </span>
                     <span>
                        <Text>Capital:</Text>
                        <p>{country.capital}</p>
                     </span>
                  </Inner>
               </>}
         </Item>
         {borders && borders.map(item => (
            <ButtonLink to={`/country/${item}`} key={item}>{item}</ButtonLink>
         ))}
      </>
   )
}

export default PageCountry
