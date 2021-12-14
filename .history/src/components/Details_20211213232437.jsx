import {useState, useEffect} from 'react';
import { filterByCode } from '../config';
import { useNavigate } from 'react-router-dom';
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


function Details({country, border = []}) {
   const [state, setState] = useState();

   const navigate = useNavigate();

   useEffect(()=>{

      fetch(filterByCode(border))
         .then(res => {
            try{
               return res.json()
            }catch(e){
               console.error(e)
            }
         })
         .then(r => {
           try{
            console.log(r[0].name.common);
            setState([...r])
           }catch(e){
              console.error(e)
           }
         })


   },[border])
   console.log(state)

   return (
      <>
         <Item>
            {country && <>
                  <Img src={country.flags.png || ''} alt='flag of country' />
                  <Inner>
                     <h4>{country.name.common || ''}</h4>
                     <span>
                        <Text>population:</Text>
                        <p>{country.population || ''}</p>
                     </span>
                     <span>
                        <Text>Region:</Text>
                        <p>{country.region || ''}</p>
                     </span>
                     <span>
                        <Text>Capital:</Text>
                        <p>{country.capital || ''}</p>
                     </span>
                  </Inner>
                  <ul>
                  {state && state.map(item => <li key={item.name.common} onClick={()=> navigate(`/country/${item.name.common}`)}>{item.name.common}</li>)}
                  </ul>
               </>}
         </Item>
             
      </>
   )
}
export default Details
