import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Body';
import Home from './Home';
import Login from './login';
import Profile from './profile';
import Dashboard from './Dashboard';
import Messages from './pages/Messages';
import HealthService from './pages/HealthService';
import BaseLayout from './components/Layouts/BaseLayout';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/healthService" element={<HealthService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
