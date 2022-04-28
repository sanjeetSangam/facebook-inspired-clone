import { Login } from "./components/login/Login";

import { Routes, Route } from "react-router-dom";
import Allhome from "./components/Allhome";
import { useSelector } from "react-redux";

function App() {
  let user = useSelector((store) => store.user.user);

  return (
    <div className="App">
      {user.name == undefined ? (
        <Login />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Allhome />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
