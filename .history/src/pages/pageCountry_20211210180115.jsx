import {useParams} from 'react-router-dom';
import {searchCountry} from '../config';


function PageCountry() {
   const {name} = useParams();

   return (
      <div>
         page country
      </div>
   )
}

export default PageCountry
