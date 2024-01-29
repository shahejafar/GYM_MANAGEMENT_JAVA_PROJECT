import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Login from './Login-register/Login';
import Register from './Login-register/Register';
import Home from './Pages/Home';
import ProtectedRoute from './services/ProtectedRoute';
import Trainer from './Trainer/Trainer';
import Member from './Member/Member';
import MainPage from './Pages/MainPage';
import EditMember from './Member/EditMember';
import EditTrainer from './Trainer/EditTrainer';
import Package from './Package/Package';
import Plans from './Plans/Plans';
import EditPackage from './Package/EditPackage';
import EditPlans from './Plans/EditPlans';
function App() {
  return (
    <div className="App">
    
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* Protected routes  */}
        <Route path='/' element={<ProtectedRoute />} >
        <Route path='/' element={<Home />} />
        <Route path='/trainer' element={<Trainer /> } />
        <Route path='/member' element={<Member /> } />
        <Route path='/plans' element={<Plans /> } />
        <Route path='/package' element={<Package /> } />
        <Route path='/editmember/:id' element={<EditMember /> } />
        <Route path='/edittrainer/:id' element={<EditTrainer /> } />
        <Route path='/editpackage/:id' element={<EditPackage /> } />
        <Route path='/editplanes/:id' element={<EditPlans /> } />
        </Route>

        <Route path='/mainpage' element={<MainPage /> } />
       </Routes>
    </Router>
    </div>
  );
}
export default App;


