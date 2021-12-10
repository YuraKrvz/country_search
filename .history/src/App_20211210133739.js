import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './pages/PageHome';
import PageCountry from './pages/PageCountry';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <PageHome/> } />
        <Route path='country' element={ <PageCountry/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
