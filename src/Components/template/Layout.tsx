import { Outlet } from "react-router-dom";
import Header from "../global/header/Header";
import HomeHeader from "../global/homeHeader/HomeHeader";
import Home from "../pages/home/Home";
import Footer from "../global/footer/Footer";


const Layout = () => {
    return (<>
        <Header />
        <HomeHeader />
        <Home />
        <Outlet />
        <Footer />
    </>)
}
export default Layout;