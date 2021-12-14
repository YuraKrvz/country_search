
import { Link, useNavigate} from 'react-router-dom';
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
const ButtonLink = styled(Link)`
   border: 2px solid black;
`;

function Details({country, borders}) {
   
   const navigate = useNavigate();
   const handler = (link)=> navigate(`/country/${link}`);

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
               {borders.map(item => <button onClick={()=> handler(item)} key={item}>{item}</button>)}
      </>
   )
}

export default Details
