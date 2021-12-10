import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './pages/PageHome';
import PageCountry from './pages/PageContry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' component={PageHome} />
        <Route path='/' component={PageCountry} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
