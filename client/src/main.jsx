import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
