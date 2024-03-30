/* eslint-disable react/no-unescaped-entities */

import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile />
      <div className="main-content">
        <Navbar />
        <section
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
