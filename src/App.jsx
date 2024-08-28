import Home from './Home/Home';
import RenderFooter from './RenderFooter/RenderFooter';
import RenderHeader from './RenderHeader/RenderHeader';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
        <Routes>
          <Route path="/home" element={
            <div>
              <RenderHeader />
              <Home />
              <RenderFooter />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
