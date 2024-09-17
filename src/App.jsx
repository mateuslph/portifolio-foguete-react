import Home from './Home/Home';
import Projects from './Projects/Projects';
import RenderFooter from './RenderFooter/RenderFooter';
import RenderHeader from './RenderHeader/RenderHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RenderHeader />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
         </Routes>
        <RenderFooter />
      </BrowserRouter>
    </div>
  )
}

export default App;
