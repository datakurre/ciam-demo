import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Callback from './pages/Callback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;