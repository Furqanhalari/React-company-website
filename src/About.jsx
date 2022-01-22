import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/image 3.jpg'
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common name="Welcome to About Page" imgSrc={web} visit="/contact" btName="Contact Now"/>
    </>
  );
};
export default About;;
