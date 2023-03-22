import Navbar from "./Navbar";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home"
import DataCome from "./DataCome";
import Footer from "./Footer";
// import Temp from "./Temp";


function App() {
  return (
    <div className="overflow-hidden w-full">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  path="/general" element={<DataCome cat="general" />}/>
          <Route  path="/business" element={<DataCome cat="business" />}/>
          <Route  path="/entertainment" element={<DataCome cat="entertainment" />}/>
          <Route  path="/health" element={<DataCome cat="health" />}/>
          <Route  path="/science" element={<DataCome cat="science" />}/>
          <Route  path="/sports" element={<DataCome cat="sports" />}/>
          <Route  path="/technology" element={<DataCome cat="technology" />}/>
          
        </Routes>
        <Footer/>
      </Router>
     {/* <Temp/> */}
     
    
     
      
    </div>
  );
}

export default App;
