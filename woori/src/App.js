import React, { createContext, useContext, useState } from "react";
import Router from "./pages/Router";
import GlobalStyle from "./GlobalStyle";
import { CookiesProvider, useCookies } from "react-cookie";
import { QueryClientProvider, QueryClient } from "react-query";
import Login from "./components/Auth/Login";
import CreateProfile from "./components/Auth/CreateProfile";
import Connect from "./components/Auth/Connect";
// import { useNavigate } from "react-router-dom";
// import PrivateRoute from './PrivateRoute';

// 같은 변수값을 공유할 범위 설정
export const SetCookieContext = createContext(() => {});
export const CookieContext = createContext();
const queryClient = new QueryClient();

function App() {
  // let navigate = useNavigate();
  // let [username, setUsername] = useState("");
  // let [password, setPassword] = useState("");
  // let [confirmPassword, setConfirmPassword] = useState("");

  const [cookies, setCookie] = useCookies(["token"]);
  const [isLogin, setIsLogin] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isCouple, setIsCouple] = useState(false);

  if (!isLogin) {
    return () => {
      <Login />;
    };
    // } else if (!isProfile) {
    //   return <CreateProfile />;
    // } else if (!isCouple) {
    //   return <Connect />;
    // }
  }
  return (
    <>
      {/* 같은 값을 사용할 구조를 감싼다 */}
      <GlobalStyle>
        <CookieContext.Provider value={cookies}>
          <SetCookieContext.Provider value={setCookie}>
            <CookiesProvider>
              <QueryClientProvider client={queryClient}>
                <Router />
              </QueryClientProvider>
            </CookiesProvider>
          </SetCookieContext.Provider>
        </CookieContext.Provider>
      </GlobalStyle>
    </>
  );
}

export default App;
