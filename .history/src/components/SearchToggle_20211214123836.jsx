import react from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
   width: 400px;
   display: flex;
   flex-direction: space-around;

`;
const Input = styled.input`

`;
const Select = styled.select``;

function SearchToggle() {
   return (
      <SearchWrapper>
         <Input type='text' />
         <Select />
      </SearchWrapper>
   )
}

export default SearchToggle
