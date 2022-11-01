import Home from "./Components/Home";
import Technologies from "./Components/Technologies";
import Sample from "./Components/Sample";
import FetchApi from "./Components/FetchApi";

function App() {
  return (
    <div>
      <h3>App component</h3>
      <Home />
      <Technologies />
      {/* props below */}
      {/* <Sample name="JavaScript" /> */}
      <Sample />
      <FetchApi />
    </div>
  );
}

export default App;
