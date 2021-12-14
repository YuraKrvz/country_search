import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';
import Details from '../components/Details';


function PageCountry() {
   const [country, setCountry] = useState(null);
   const [borders, setBorders] = useState([]);
   const {name} = useParams();

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
            if(res.status <= 299){
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