import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
