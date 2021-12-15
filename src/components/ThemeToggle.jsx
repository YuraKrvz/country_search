import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FaMoon, FaRegMoon} from 'react-icons/fa';

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   border: none;
   cursor: pointer;
`;

function ThemeToggle() {
   const [theme, setTheme] = useState('dark');
   const toggleTheme = ()=> setTheme(theme === 'light' ? 'dark' : 'light');

   useEffect(()=>{
      document.body.setAttribute('data-theme', theme)
   },[theme])

   return (
      <Button onClick={toggleTheme}>
         {
            theme === 'light' ? <FaRegMoon /> : <FaMoon />
         }
      </Button>   
   )
}

export default ThemeToggle
