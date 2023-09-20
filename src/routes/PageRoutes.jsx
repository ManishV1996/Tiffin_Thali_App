import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import routes from "./routes.json";
import Checkout from "../components/Checkout/Checkout";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home/>}/>
        <Route path={routes.CHECKOUT} element={<Checkout/>}/>
      </Routes>
    </>
  );
};

export default PageRoutes;
