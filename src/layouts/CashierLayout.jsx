import { Outlet } from "react-router-dom";
import Sidebar from "@components/common/Sidebar/Sidebar";
import Header from "@components/common/Header/Header";
import Checkout from "@components/common/Checkout/Checkout";

const CashierLayout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="content_wapper">
          <Checkout />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CashierLayout;
