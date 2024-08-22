import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import RenderFooter from './RenderFooter/RenderFooter';
import RenderHeader from './RenderHeader/RenderHeader';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
