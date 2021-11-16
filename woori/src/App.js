import React from "react";
import Router from "./pages/Router";
import GlobalStyle from "./GlobalStyle";
import { CookiesProvider } from "react-cookie";

// 같은 변수값을 공유할 범위 설정
// export let userContext = React.createContext();

function App() {
  // let [username, setUsername] = useState("");
  // let [password, setPassword] = useState("");
  // let [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      {/* 같은 값을 사용할 구조를 감싼다 */}
      <GlobalStyle>
        {/* <userContext.Provider> */}
        <CookiesProvider>
          <Router />
        </CookiesProvider>
        {/* </userContext.Provider> */}
      </GlobalStyle>
    </>
  );
}

export default App;
