import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/Auth';
import Feed from './pages/Feed';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
