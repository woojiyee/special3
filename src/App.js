import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import TopHeader from "./components/layout/TopHeader";
import "./assets/css/mystyle.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopHeader/>
        <Routes>
          <Route path = "/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
