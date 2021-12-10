import styled from 'styled-components';

const Header = styled.header`
   height: 150px;
   width: 100%;
   padding: 20px;
`;
const Title = styled.h1`
   
`;

function Header() {
   return (
      <Header>
         <Title>Search country</Title>
         <button>theme</button>
      </Header>
   )
}

export default Header;