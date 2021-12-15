import {useRef} from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div``;
const Input = styled.input`
   width: 200px;
   height: 25px;
   border: 1px solid var(--colors-bg);
   background-color: var(--colors-ui-base);
   border-radius: 5px;
   color: var(--colors-text);
   font-size: var(--font-md);
`;
const Select = styled.select``;

function SearchToggle({countries, setCountries}) {
   const inputEl = useRef();
   const handlerInput = () => {
      console.log(inputEl.current.value);

      setCountries(countries.filter(obj => obj.name.includes(inputEl.current.value))

   };
   
   return (
      <SearchWrapper>
         <Input ref={inputEl} type='text' onChange={handlerInput} />
         <Select />
      </SearchWrapper>
   )
}

export default SearchToggle
