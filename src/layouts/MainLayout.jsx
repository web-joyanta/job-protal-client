import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;