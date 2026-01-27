import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage.jsx'; 
  import './App.css';
  import Header from "./components/Header/Header";
 import Footer from "./components/Footer/Footer";

function App() {
 
  return (
   <Router>
         <Header/>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          </Routes>
           <Footer/>
 
           </Router>
  )
}

export default App


 