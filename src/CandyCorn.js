import React from "react";
import candyCorn from "./candyCorn.jpeg";
import "./CandyCorn.css";
const CandyCorn = () => {
    return (
        <div className="candyCorn" 
            style={{ backgroundImage: `url(${candyCorn})`, 
                backgroundSize: 'cover', minHeight: '100vh' }}>
            <h1 className="candyCornGreet"> The freshest Candy Corn you can get this Spring!</h1>
        </div>
    )
};

export default CandyCorn;