import {useState} from 'react';
import {FaMoon, FaRegMoon} from 'react-icons/fa';

function ThemeToggler() {
   const [theme, setTheme] = useState('light');

   return (
      <>
         <button>
            {
               theme === 'light' ? (<FaMoon />) : (<FaRegMoon />)
            }
         </button>
         
           
      </>
   )
}

export default ThemeToggler
