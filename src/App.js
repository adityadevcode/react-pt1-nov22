import Home from "./Components/Home";
import Technologies from "./Components/Technologies";
import Sample from "./Components/Sample";

function App() {
  return (
    <div>
      <h3>App component</h3>
      <Home />
      <Technologies />
      {/* props below */}
      {/* <Sample name="JavaScript" /> */}
      <Sample />
    </div>
  );
}

export default App;
