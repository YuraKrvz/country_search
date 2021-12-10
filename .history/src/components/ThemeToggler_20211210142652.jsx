import {useState} from 'react';
import {FaMoon, FaRegMoon} from 'react-icons/fa';

function ThemeToggler() {
   const [theme, setTheme] = useState('light');

   return (
      <>
         <button>
            {
               theme === 'li1ght' ? (<FaMoon />) : (<FaRegMoon />)
            }
         </button>
         
           
      </>
   )
}

export default ThemeToggler
