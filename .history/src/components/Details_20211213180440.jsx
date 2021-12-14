import {useState, useEffect} from 'react';
import { filterByCode } from '../config';
import { Link } from 'react-router-dom';
// import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
// import Neighbours from './Neighbours';

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
   const [objs, setObjs] = useState();

   useEffect(()=>{
      // setState(border.map(b => searchOfCodeCountry(b)));
      // fetch(searchOfCodeCountry())
      // let res = state.map(url => fetch(url).then(r => r.json()).then(p => console.log(p)) );

      // let p = new Promise.all(res)
      // .then(res => res.forEach(e => console.log(e)))
      // state.map(o => {
      //    fetch(searchCountry(o))
      //    .then(r => r.json())
      //    .then(r => console.log(r))
      // })
      fetch(filterByCode(border))
         .then(({data}) => )


   },[border])
   console.log(state)

// console.log(country)
// console.log(border)
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
                  {border.map(b => <li key={b}><Link to={`/country/${b}`}>{b}</Link></li>)}
                  </ul>
               </>}
         </Item>
             
      </>
   )
}
export default Details

//to={`/country/${c.name.common}`}
//to={searchCountry(b)}