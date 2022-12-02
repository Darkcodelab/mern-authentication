import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="bg-black min-h-[100vh]">
      <div className="container mx-auto font-poppins pt-10">
        <Login />
        <div className="text-3xl text-center pt-10 text-white">--Or--</div>
        <Register />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
