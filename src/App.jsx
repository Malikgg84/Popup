import React, { Suspense } from "react";
import shoe from "/shoe.webp";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";
export default function App() {
  return (
    <>
      <Header />
      {/* Fallback is show on our screen when our that file response is not comes
      where we use lazy load and fallback will disappear when our file comes */}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
