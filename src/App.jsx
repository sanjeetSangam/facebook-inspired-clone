import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import { Widgets } from "./components/rightC/Widgets";
import { Login } from "./components/login/Login";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />

          <div className="main_body">
            <Sidebar />
            <Content />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
