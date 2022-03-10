
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GuideProvider from "./context/GuideContext"

import Homepage from "./pages/Homepage";
import GuideDetails from "./pages/GuideDetails"
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <GuideProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/guide/:guide" element={<GuideDetails />} />
            <Route path="/add-note" element={<Form />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </GuideProvider>
  );
}
export default App;
