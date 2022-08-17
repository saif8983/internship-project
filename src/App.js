
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Customer from './pages/Customer';
// router is imported for make page chage as per url change
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    //main layout which make by grid 
    <>
    <div class="page-design">
  <Router>
  <div class="Navbar"><Navbar/></div>
  <div class="Sidbar"><Sidebar/></div>
  <div class="Content">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Customer" element={<Customer/>}/>
      </Routes>
      </div>
      </Router>
</div>
    </>
  );
}

export default App;
