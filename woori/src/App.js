import React, { createContext, useContext } from "react";
import Router from "./pages/Router";
import GlobalStyle from "./GlobalStyle";
import { CookiesProvider, useCookies } from "react-cookie";

// 같은 변수값을 공유할 범위 설정
export const SetCookieContext = createContext(() => {});
export const CookieContext = createContext();

function App() {
  // let [username, setUsername] = useState("");
  // let [password, setPassword] = useState("");
  // let [confirmPassword, setConfirmPassword] = useState("");

  const [cookies, setCookie] = useCookies(["token"]);

  return (
    <>
      {/* 같은 값을 사용할 구조를 감싼다 */}
      <GlobalStyle>
        <CookieContext.Provider value={cookies}>
          <SetCookieContext.Provider value={setCookie}>
            <CookiesProvider>
              <Router />
            </CookiesProvider>
          </SetCookieContext.Provider>
        </CookieContext.Provider>
      </GlobalStyle>
    </>
  );
}

export default App;
