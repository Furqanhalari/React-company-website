import React from "react";
import Card from './Card'
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row mb-4 gy-4">
          {
            Sdata.map((val, index) => {
              return <Card key={index} imgSrc={val.imgSrc} title={val.title}/>
            })
          }
        </div>
      </div>
    </>
  );
};
export default Service;
