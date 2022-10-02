import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './pages/create/Create';
import Event from './pages/event/Event';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
