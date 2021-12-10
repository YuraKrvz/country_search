import styled from 'styled-components';

const WrapperHeader = styled.header`
   height: 150px;
   width: 100%;
   padding: 20px;
`;
const Title = styled.h1`
   font-size: var(--font-md);
   font-weight: var(--fw-bold);

`;

function Header() {
   return (
      <WrapperHeader>
         <Title>Search country</Title>
         <button>theme</button>
      </WrapperHeader>
   )
}

export default Header;