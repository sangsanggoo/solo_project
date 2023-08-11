import { Global } from "@emotion/react";
import { Reset } from "./Global/reset";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "./pages/Title";

function App() {
  return (
    <>
      <Global css={Reset}></Global>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Title />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
