import {useState} from 'react';
import {FaMoon, FaRegMoon} from 'react-icons/fa';

function ThemeToggler() {
   const [theme, setTheme] = useState('light');

   return (
      <>
         <button>
         <FaMoon />  
         </button>
         
         <FaRegMoon />  
      </>
   )
}

export default ThemeToggler
