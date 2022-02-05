import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <h1>Nav Bar </h1>
      <div className="bg-gray-100 h-screen p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
