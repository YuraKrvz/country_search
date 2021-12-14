import {useState, useEffect} from 'react';
import { listOfCodes } from '../config';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
   display: flex;
   justify-content: center; 
   width: 850px;
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
   const [neighbours, setNeighbours] = useState();

   console.log(listOfCodes(border))

   const navigate = useNavigate();

   useEffect(()=>{
      fetch(listOfCodes(border))
         .then(res => {
            try{
               return res.json()
            }catch(e){
               console.error(e)
            }
         })
         .then(r => {
           try{
            setNeighbours([...r])
           }catch(e){
              console.error(e)
           }
         })
   },[border])
   // console.log(state)

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
                  {  neighbours && neighbours.map(neighbour => (
                     <li 
                        key={neighbour.name.common} 
                        onClick={ ()=> navigate(`/country/${neighbour.name.common}`) }
                     >
                        {neighbour.name.common}
                     </li>
                  ))}
                  </ul>
               </>}
         </Item>
             
      </>
   )
}
export default Details
