
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Homapage from './Components/Homapage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Customerpage from './Components/Customer';
function App() {
  return (
    <>
    <div class="page-design">
  <Router>
  <div class="Navbar"><Navbar/></div>
  <div class="Sidbar"><Sidebar/></div>
  <div class="Content">
      <Routes>
        <Route exact path="/" element={<Homapage/>}/>
        <Route exact path="/Customer" element={<Customerpage/>}/>
      </Routes>
      </div>
      </Router>
</div>
    </>
  );
}

export default App;
