import React from "react";
import Navbar from "../Layout/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-black text-white">{children}</main>
    </div>
  );
}

export default Layout;
