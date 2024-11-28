import { ToastContainer } from "react-toastify";
import Router from "./shared/Router";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};

export default App;
