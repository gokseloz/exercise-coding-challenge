import "./App.css";
import HomePage from "./views/HomePage";
import Series from "./views/Series";
import Movies from "./views/Movies";
import TermsAndCondition from "./views/TermsAndCondition";
import PrivacyPolicy from "./views/PrivacyPolicy";
import ManageAccount from "./views/ManageAccount";
import CollectionStatement from "./views/CollectionStatement";
import Help from "./views/Help";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/termsAndCondition" element={<TermsAndCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/collection" element={<CollectionStatement />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account" element={<ManageAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
