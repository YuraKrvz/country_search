import styled from 'styled-components';
import ThemeToggler from './ThemeToggler';

const WrapperHeader = styled.header`
   display: flex;
   justify-content: space-between; 
   height: 150px;
   width: 100%;
   padding: 20px;
   background-color: var(--colors-ui-base);

`;
const Title = styled.h1`
   color: var(--colors-text);
   font-size: var(--font-md);
   font-weight: var(--fw-bold);

`;

function Header() {
   return (
      <WrapperHeader>
         <Title>Search country</Title>
         <ThemeToggler />
      </WrapperHeader>
   )
}

export default Header;