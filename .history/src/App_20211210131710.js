import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './pages/PageHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' component={PageHome} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
