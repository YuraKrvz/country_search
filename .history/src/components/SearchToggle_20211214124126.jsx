import react from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div``;
const Input = styled.input`
   border: 1px solid var(--colors-bg);
   background-color: var(--colors-ui-base);
   color: var(--colors-text);
   font-size: var(--font-sm);
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
