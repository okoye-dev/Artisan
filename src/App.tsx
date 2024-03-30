import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import GetStarted from "./pages/GetStarted";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import Nearby from "./pages/Nearby";
import ArtisanProfile from "./pages/ArtisanProfile";

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/artisan-profile" element={<ArtisanProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
