
import { Home } from './pages/home page/home';
import Products from './pages/products';
import { About } from './pages/about';
import {Routes,Route} from 'react-router-dom'
import Navigation from './pages/Navigation';
import Signin from './pages/sign In page/Signin';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import ResetPassword from './pages/reset password/ResetPassword';

function App() {
const{user}=useContext(AuthContext)

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/signIn" element={<Signin />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/forgot-password" element={<ResetPassword />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute user={user}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
