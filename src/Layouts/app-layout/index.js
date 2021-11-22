import React from "react";
import AppViews from "../../views/app-views";
import Header from "../../Components/layout-components/Header";
import Footer from "../../Components/layout-components/Footer";
const AppLayout = () => {
  return (
    <div className="">
      <Header />

      <div className=" h-screen top-0 absolute w-full bg-gray-300">
        <AppViews />
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
