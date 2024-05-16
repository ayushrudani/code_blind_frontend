import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Auth from "./Components/Auth";
import Problem from "./Components/Problem";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      {/* define roots */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="problem/:id" element={<Problem />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
      {/* define components */}
    </div>
  );
}

export default App;
