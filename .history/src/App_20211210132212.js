import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './pages/PageHome';
import PageCountry from './pages/PageCountry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PageHome/> } />
        <Route path='country' element={ <PageCountry/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
