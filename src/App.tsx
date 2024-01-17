import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import LoadingScreen from "./components/LoadingScreen";
function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<LoadingScreen />} />
    </>
  );
}

export default App;
