
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/users/add" element={<AddUser />} />
        <Route exact path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
