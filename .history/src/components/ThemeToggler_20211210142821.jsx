import {useState, useEffect} from 'react';
import {FaMoon, FaRegMoon} from 'react-icons/fa';

function ThemeToggler() {
   const [theme, setTheme] = useState(true);

   return (
      <>
         <button onClick={()=> setTheme(!theme)}>
            {
               theme === true ? (<FaMoon />) : (<FaRegMoon />)
            }
         </button>
         
           
      </>
   )
}

export default ThemeToggler
