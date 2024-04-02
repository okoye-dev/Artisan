import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./components/SignUp";
import GetStarted from "./pages/GetStarted";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import Nearby from "./pages/Nearby";
import ArtisanProfile from "./pages/ArtisanProfile";
import YourOrder from "./pages/YourOrder";
import PaymentOptions from "./pages/PaymentOptions";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import SignIn from "./components/SignIn";
import ArtisanSignIn from "./pages/ArtisanSignIn";

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/artisan-signin" element={<ArtisanSignIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/artisan-profile" element={<ArtisanProfile />} />
        <Route path="/your-order" element={<YourOrder />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/payment-successful" element={<PaymentSuccessful />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
