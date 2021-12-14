

function Details({country, borders}) {
   return (
      <>
         <Item>
            {country && <>
                  <Img src={country.flags.png} alt='flag of country' />
                  <Inner>
                     <h4>{country.name.common}</h4>
                     <span>
                        <Text>population:</Text>
                        <p>{country.population}</p>
                     </span>
                     <span>
                        <Text>Region:</Text>
                        <p>{country.region}</p>
                     </span>
                     <span>
                        <Text>Capital:</Text>
                        <p>{country.capital}</p>
                     </span>
                  </Inner>
               </>}
         </Item>
               {borders.map(item => <button onClick={()=> handler(item)} key={item}>{item}</button>)}
      </>
   )
}

export default Details
