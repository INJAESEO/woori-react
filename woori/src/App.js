import React, { createContext, useContext, useState } from "react";
import Router from "./pages/Router";
import GlobalStyle from "./GlobalStyle";
import { CookiesProvider, useCookies } from "react-cookie";
import { QueryClientProvider, QueryClient } from "react-query";

// 같은 변수값을 공유할 범위 설정
export const SetCookieContext = createContext(() => {});
export const CookieContext = createContext();

export const NicknameContext = createContext();
export const SetNicknameContext = createContext(() => {});

const queryClient = new QueryClient();

function App() {
  const [cookies, setCookie] = useCookies(["token"]);
  const [nickname, setNickname] = useState("");

  return (
    <>
      {/* 같은 값을 사용할 구조를 감싼다 */}
      <GlobalStyle>
        <SetNicknameContext.Provider value={setNickname}>
          <NicknameContext.Provider value={nickname}>
            <CookieContext.Provider value={cookies}>
              <SetCookieContext.Provider value={setCookie}>
                <CookiesProvider>
                  <QueryClientProvider client={queryClient}>
                    <Router />
                  </QueryClientProvider>
                </CookiesProvider>
              </SetCookieContext.Provider>
            </CookieContext.Provider>
          </NicknameContext.Provider>
        </SetNicknameContext.Provider>
      </GlobalStyle>
    </>
  );
}

export default App;
