import { Global } from "@emotion/react";
import { Reset } from "./Global/reset";
import { Route, Routes } from "react-router-dom";
import Title from "./pages/Title";

function App() {
  return (
    <>
      <Global css={Reset}></Global>
      <Routes>
        <Route path={"/"} element={<Title />}></Route>
      </Routes>
    </>
  );
}

export default App;
