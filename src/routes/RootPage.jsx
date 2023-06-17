import { Outlet } from "react-router-dom";
import MainNavigation from "../components/mainNavigation";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootPage;
