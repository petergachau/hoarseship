import logo from './logo.svg';
import './App.css';
import Tophead from './components/Tophead';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Group from './pages/Group';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bootcamp from './pages/Bootcamp';
import Team from './pages/Team';
import Error from './pages/Error';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Tophead/>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/group' element={<Group/>}/>
      <Route path='/bootcamp' element={<Bootcamp/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
<Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
