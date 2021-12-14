import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';
import Details from '../components/Details';


function PageCountry() {
   const [country, setCountry] = useState(null);
   const {name} = useParams();

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
         setCountry({c: res[0], borders: res[0].borders});
      })
   }, [name]);


   return (
      <>
         {country && <Details country={country} />}
      </>
   )
}

export default PageCountry;