import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/layout/Footer";
import TopHeader from "./components/layout/TopHeader";

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
