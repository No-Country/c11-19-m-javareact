import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RouterProvider } from "./RouterProvider";

function Layout() {
  return (
    <>
      <Header />
        <RouterProvider />
      <Footer />
    </>
  );
}

export default Layout;
