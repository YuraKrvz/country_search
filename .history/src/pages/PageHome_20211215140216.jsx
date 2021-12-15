import ListCountries from '../components/ListCountries';

function PageHome({countries}) {
   const [filteredCountries, setFilteredCountries] = useState(countries);
   // console.log(countries)
   return (
      <div>
         <ListCountries filteredCountries={filteredCountries} />
      </div>
   )
}

export default PageHome