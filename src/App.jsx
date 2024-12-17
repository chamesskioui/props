import './App.css'
import Cards from './components/Cards';
import Slider from './components/Carosels';
import Footerr from './components/Footerr';
import Header from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import movies from './components/data';
function App() {
 
 const dark=false



  return (
 <div>
  <Header dark={dark}/>
  <Slider/>
  <Cards movies={movies} dark={dark}/>
  <Footerr dark={dark}/>
  </div>
  )
}

export default App
