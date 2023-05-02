import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Header from "../components/Header/Header";
import BucketList from "../components/BucketList/BucketList";
import Input from "../components/Input/Input";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Input />} />
        <Route path="/lists" element={<BucketList />} />
        <Route path="/lists/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
