import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './pages/Account';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />

        {/* <Route element={ <PrivateRoute /> }>
          <Route path="/account-balance" element={ } />
        </Route> */}
        <Route path="/account/:id" element={ <Account /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
