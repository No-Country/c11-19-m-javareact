import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";

export const RouterProvider = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />

        <Route path="#" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
};
