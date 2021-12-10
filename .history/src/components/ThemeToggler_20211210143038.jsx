import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FaMoon, FaRegMoon} from 'react-icons/fa';

const Button = styled.button`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   border: none;
`;

function ThemeToggler() {
   const [theme, setTheme] = useState(true);

   return (
      <>
         <Button onClick={()=> setTheme(!theme)}>
            {
               theme === true ? (<FaMoon />) : (<FaRegMoon />)
            }
         </Button>
         
           
      </>
   )
}

export default ThemeToggler
