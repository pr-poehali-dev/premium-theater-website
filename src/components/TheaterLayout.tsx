import React from "react";
import TheaterHeader from "./TheaterHeader";
import TheaterFooter from "./TheaterFooter";

interface TheaterLayoutProps {
  children: React.ReactNode;
}

const TheaterLayout = ({ children }: TheaterLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <TheaterHeader />
      <main>{children}</main>
      <TheaterFooter />
    </div>
  );
};

export default TheaterLayout;
