import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./components/HomePage";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="">
      <MyNav />
      <HomePage />
    </div>
  );
}

export default App;
