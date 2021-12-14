import {useState, useEffect} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import {searchCountry} from '../config';
import Details from '../components/Details';
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


function PageCountry() {
   const [country, setCountry] = useState(null);
   const [borders, setBorders] = useState([]);
   const {name} = useParams();

   const navigate = useNavigate();
   const handler = (link)=> navigate(`/country/${link}`);

   console.log(country)
   console.log(borders)

   useEffect(()=>{
      fetch(searchCountry(name))
      .then(res => {
         try{
            if(res.status < 299){
               return res.json()
            }
         } catch(e){
            console.error("my error")
            console.error(e)
         }
      })
      .then(res => {
         setCountry(res[0]);
         if(res[0].borders){
            setBorders(res[0].borders)
         }
      })
   }, []);

   useEffect(()=>{
      fetch(searchCountry(name))
      .then(res => {
         try{
            if(res.status < 299){
              return res.json()
            }
         } catch(e){
            console.error("my error")
            console.error(e)
         }
      })
      .then(res => {
         setCountry(res[0]);
         if(res[0].borders ){
            setBorders(res[0].borders)
         }
      })
   }, [name])

   return (
      <>
         <Details country={country} borders={borders} />
      </>
   )
}

export default PageCountry;