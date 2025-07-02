import React from "react";
import Header from "../Header";
import BusinessCard from "./BusinessCard";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome to the Holy Ghost College 08 Set Business Album
          </h1>
        </div>
      </main>
      <BusinessCard />
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Holy Ghost College 08 Set. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
