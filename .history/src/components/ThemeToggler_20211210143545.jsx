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
`;

function ThemeToggler() {
   const [theme, setTheme] = useState('light');
   const toggleTheme = ()=> setTheme(theme === 'light' ? )

   useEffect(()=>{
      document.body.setAttribute('data-theme', theme)
   },[theme])

   return (
      <>
         <Button onClick={}>
            {
               theme === 'light' ? <FaMoon /> : <FaRegMoon />
            }
         </Button>
         
           
      </>
   )
}

export default ThemeToggler
