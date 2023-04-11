import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import { useAuth } from './hooks/Auth';
import Feed from './pages/Feed';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path='/feed' element={<Feed/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
