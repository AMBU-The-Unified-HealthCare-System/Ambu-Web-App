import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/aboutPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Footer />
        </div>
    );
}

export default App;
