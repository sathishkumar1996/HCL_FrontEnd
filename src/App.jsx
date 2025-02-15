import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Body';
import Home from './Home';
import Login from './login';
import Profile from './profile';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
