import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExperienceDetail from './pages/ExperienceDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/dizigroup-quizz" element={<Navigate to="/experience/dizigroup" replace />} />
        <Route path="/experience/dizigroup-kondaktor" element={<Navigate to="/experience/dizigroup" replace />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
