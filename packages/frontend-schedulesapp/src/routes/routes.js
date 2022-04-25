import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/Layout";
import ListingSchedule from "../pages/schedulesListing/Schedules";
import RegisterSchedule from "../pages/schedulesRegister/Register";
import About from "../pages/about/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route path="/schedule/register" element={<RegisterSchedule />} />
          <Route path="/schedule/listing" element={<ListingSchedule />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
