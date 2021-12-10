import {useState} from 'react';
import {FaMoon, FaRegMoon} from 'react-icons/fa';

function ThemeToggler() {
   const [theme, setTheme] = useState('light');

   return (
      <>
         <button></button>
         <FaMoon />  
         <FaRegMoon />  
      </>
   )
}

export default ThemeToggler
