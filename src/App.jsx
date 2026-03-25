import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

{/*import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';*/}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>          
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Navigate to="/home" />} />
          {/*<Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} /> */}

         </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
