import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './common/components/_organisms/Layouts/MainLayout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; 

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />

        
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        
      </Routes>
    </Router>
  );
};

export default App;
