import { createRoot } from 'react-dom/client'
import './index.css'
import "react-toastify/dist/ReactToastify.css";
import App from './App.jsx'
import { ToastContainer } from "react-toastify";

import { store } from "./app/store";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    <App />
    <ToastContainer position="bottom-right" autoClose={1000} />
  </Provider>
);
