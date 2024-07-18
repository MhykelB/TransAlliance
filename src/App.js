import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";

import AppPage from "./components/AppPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<AppPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
