import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CriteriaPage from "./pages/CriteriaPage";
import DetailPage from "./pages/DetailPage";

import Home from "./pages/Home";
import store from "./redux/store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/criteria" element={<CriteriaPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
