
import './App.css';
import './style.css';
import Home from './pages/Home';
import About from './pages/about';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Notice from './pages/Notice';
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/notice" element={<Notice/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/notice/:id/detail" element={<Detail/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




