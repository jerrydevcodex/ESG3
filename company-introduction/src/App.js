
import './App.css';
import './style.css';
import Nav from './components/Nav';
import Notice from './components/Notice';
import Edit from './components/Edit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/notice" element={<Notice/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Home/>}/>
          <Route path="/contact" element={<Home/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


const Home = () => {
  return (
    <body>
    <div className="wrap">
        <div className="intro_bg">
            <Nav/>
            
        </div>
    </div>
    <footer>
        <p> 여기에 푸터를 넣을거에요</p>

    </footer>
    </body>
  )
}


const About = () => {
  return (
    <div>
      <div className="intro_bg">
            <Nav/>
            <h1>ABOUT</h1>
        </div>
    </div>
  )
}
