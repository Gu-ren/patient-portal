import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
    <div className='min-w-screen '>


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </div>
    </>
    
  );
}

export default App;
