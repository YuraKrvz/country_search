import {useParams} from 'react-router-dom';


function PageCountry() {
   const {name} = useParams()l

   return (
      <div>
         page country
      </div>
   )
}

export default PageCountry
