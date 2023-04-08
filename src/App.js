import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import GoToTop from "./Components/GoToTop"
import Simple from "./Components/Nav"
function App() {
  return (
    <div className="App">
     <Simple/>
      <AllRoutes />
      {/* <Home /> */}
      {/* <GoToTop/> */}
      

      <Footer />
    </div>
  );

}

export default App;
