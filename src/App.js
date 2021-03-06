import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TimelinePage from './pages/TimelinePage';
import UserPage from "./pages/UserPage";
import UserContext from "./Providers/UserContext";
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const initialToken = localStorage.getItem("token")
  const initialUserInfos = localStorage.getItem("userInfos")

  const [userInfos, setUserInfos] = useState(JSON.parse(initialUserInfos));
  const [token, setToken] = useState(initialToken);

  return (

    <UserContext.Provider value={{ userInfos, setUserInfos, token, setToken }} >
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/timeline" element={<TimelinePage title = "timeline" isHidden = "block"/>}></Route>
          <Route path="/hashtags/:hashtag" element={<TimelinePage title = "" isHidden = "none"/>}></Route>
          <Route path="/user/:id" element={<UserPage isHidden = "none"/>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
