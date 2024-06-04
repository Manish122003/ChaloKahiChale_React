import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landingpage from './Components/Landingpage/Landingpage'
import Explore from './Components/Explore/Explore'
import Lakshadweep from './Components/Lakshadweep/Lakshadweep'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import OfferComponent from './Components/OfferComponent/OfferComponent'
import States from './Components/States/States'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
          <Landingpage/>
      <Explore/>
      <Lakshadweep/>
      
          </>
        }/>
        <Route path='/States' element={
          <>
          <States/>
          </>
        }/>
      </Routes>
      <Testimonial/>
      <OfferComponent/>
      <Footer/>
    </Router>
  )
}

export default App
