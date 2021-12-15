import {useState, useEffect} from 'react';
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

// function SearchToggle({countries, setCountries}) {
function SearchToggle({filteredCountries, setFilteredCountries}) {
   const [s, setS] = useState('');
   
   const handler = () => {
      // console.log(name)
      let arr = [...filteredCountries]
      
      console.log(arr)
      setFilteredCountries(filteredCountries.filter(item => item.independent === false) )
   }
   
   return (
      <SearchWrapper>
         <Input value={s} onChange={(e)=> setS(e.target.value)} type='text' />
         <button onClick={() => handler()} >search</button>
         <Select />
      </SearchWrapper>
   )
}

export default SearchToggle
