import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggler from './ThemeToggler';
import {BiWorld} from 'react-icons/bi';

const WrapperHeader = styled.header`
   display: flex;
   justify-content: space-between; 
   align-items: center;
   height: 100px;
   width: 100%;
   padding: 40px;
   background-color: var(--colors-ui-base);

`;
const TitleLink = styled(Link)`
   color: var(--colors-text);
   font-size: var(--font-md);
   font-weight: var(--fw-bold);
   text-decoration: none;
`;

function Header() {
   return (
      <WrapperHeader>
         <TitleLink to={'/'}>
            Search country 
            <BiWorld /> 
         </TitleLink>
         <input type="text" />
         <ThemeToggler />
      </WrapperHeader>
   )
}

export default Header;