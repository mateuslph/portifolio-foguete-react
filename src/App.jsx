import Home from './Home/Home';
import Projects from './Projects/Projects';
import RenderFooter from './RenderFooter/RenderFooter';
import RenderHeader from './RenderHeader/RenderHeader';
import Sobre from './Sobre/Sobre';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RenderHeader />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />      
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Sobre />} />
         </Routes>
        <RenderFooter />
      </BrowserRouter>
    </div>
  )
}

export default App;
