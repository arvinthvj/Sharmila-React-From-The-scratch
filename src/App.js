import Home from "./Home";
import "./styles.css";

export default function App() {
  var name = "Sharmila"
  return (
    //JSX == JAVASCRIPT XML
    <div className="App">
      <h1>{name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Home/>
    </div>

  );
}
