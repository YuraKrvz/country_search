import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';
import Details from '../components/Details';


function PageCountry() {
   const [country, setCountry] = useState([]);
   const [border, setBorder] = useState([]);
   const {name} = useParams();
   console.log(name)

   console.log(country)
   console.log(border)

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
            setBorder(res[0].borders)
         }
      })
   }, []);

   // useEffect(()=>{
   //    fetch(searchCountry(name))
   //    .then(res => {
   //       // try{
   //       //    if(res.status <= 299){
   //            return res.json()
   //       //    }
   //       // } catch(e){
   //       //    console.error("my error")
   //       //    console.error(e)
   //       // }
   //    })
   //    .then(res => {
   //       setCountry(res[0]);
   //       if(res[0].borders ){
   //          setBorder(res[0].borders)
   //       }
   //    })
   // }, [name])

   return (
      <>
         { country && <Details country={country} border={border} />}
         <p>{/*country.name.common*/}</p>
      </>
   )
}

export default PageCountry;