import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/image 4.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 gy-4 col-10 my-5">
        <div class="card cc">
          <img src={props.imgSrc} class="card-img-top" alt={props.imgSrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" class="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
