import React from "react";
import img from "./giphy.gif";
import "./Rootbeer.css";

const Rootbeer = () => {

    return (
        <div className="Rootbeer">
            <h1 className="rootbeerGreet"> Yum, my favorite soda! Great choice </h1>
            <img src={img} alt="fizzy rootbeer"></img>
        </div>
    );
};

export default Rootbeer;