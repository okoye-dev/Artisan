import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
