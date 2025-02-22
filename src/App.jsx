import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
  return (
    <Router>
       <Routes>
       <Route path="/" element={<TermsAndConditions />} />
       {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
       </Routes>
      
    </Router>
  )
}

export default App