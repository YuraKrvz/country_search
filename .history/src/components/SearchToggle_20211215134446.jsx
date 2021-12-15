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
function SearchToggle({handler}) {
   const [s, setS] = useState();
   console.log(handler)
   // useEffect(()=>{
   //    handler(s)
   // },[s])

   
   return (
      <SearchWrapper>
         <Input value={s} onChange={(e)=> setS(e.target.value)} type='text' />
         <button  >search</button>
         <Select />
      </SearchWrapper>
   )
}

export default SearchToggle
