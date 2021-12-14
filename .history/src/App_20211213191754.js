import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './pages/PageHome';
import PageCountry from './pages/PageCountry';
import Header from './components/Header';

function App() {
  const [country, setCountry] = useState(null);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <PageHome/> } />
        <Route path='country/:name' element={ <PageCountry country={country} setCountry={setCountry} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
