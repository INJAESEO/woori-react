import React, { createContext } from "react";
import Router from "./pages/Router";
import GlobalStyle from "./GlobalStyle";
import { CookiesProvider, useCookies } from "react-cookie";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";

// 같은 변수값을 공유할 범위 설정
export const SetCookieContext = createContext(() => {});
export const CookieContext = createContext();

const queryClient = new QueryClient();

function App() {
  const [cookies, setCookie] = useCookies(["token"]);

  return (
    <>
      {/* 같은 값을 사용할 구조를 감싼다 */}
      <GlobalStyle>
        <CookieContext.Provider value={cookies}>
          <SetCookieContext.Provider value={setCookie}>
            <CookiesProvider>
              <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                  <Router />
                </RecoilRoot>
              </QueryClientProvider>
            </CookiesProvider>
          </SetCookieContext.Provider>
        </CookieContext.Provider>
      </GlobalStyle>
    </>
  );
}

export default App;
