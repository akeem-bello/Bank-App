import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

function App() {
  const token = localStorage.token
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/dashboard' element={token ? <Dashboard /> : <Navigate to='/signin'/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </>
  );
}

export default App;
