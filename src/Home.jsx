import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/image 3.jpg'
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common name="Grow your business with" imgSrc={web} visit="/service" btName="Get Started"/>
    </>
  );
};
export default Home;
