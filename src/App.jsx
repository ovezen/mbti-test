import { ToastContainer } from "react-toastify";
import Router from "./shared/Router";

const App = () => {
  return (
    <div>
      <Router />
      <ToastContainer />
    </div>
  );
};

export default App;
