import ListCountries from '../components/ListCountries';

function PageHome({countries}) {
   // console.log(countries)
   return (
      <div>
         <ListCountries countries={countries} />
      </div>
   )
}

export default PageHome