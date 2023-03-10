import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rockets from 'routes/rockets.route';
import Missions from 'routes/missions.route';
import MyProfile from 'routes/myProfile.route';
import Navbar from 'components/NavBar.component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Rockets />} />
            <Route path="/mission" element={<Missions />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
