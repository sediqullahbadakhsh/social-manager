import "./App.scss";
import Contents from "./components/Contents";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main-page">
      <div className="nav-area">
        <Navbar />
      </div>
      <div className="content-area">
        <Contents />
      </div>
    </div>
  );
}

export default App;
