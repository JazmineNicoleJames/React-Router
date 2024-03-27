import React from "react";
import { Link } from "react-router-dom";
import blackVendingMachine from "./blackvending.png";
import "./VendingMachine.css";

const VendingMachine = () => {

    return (
        <div className="vendingMachine" style={{backgroundImage:`url(${blackVendingMachine})`, backgroundSize: "cover", minWidth:"100vw", minHeight:"100vh"}}>
            <h1 className="vendingMachineGreet"> Hello, what would you like from me today?</h1>
            <ul className="listItems">
                <li> 
                    <Link to="/items/rootbeer" className="rootbeerLink"> Rootbeer </Link>
                </li>    
                <li>
                    <Link to="/items/chexmix" className="chexMixLink"> Chex Mix </Link>
                </li>
                <li>
                    <Link to="/items/candycorn" className="candyCornLink"> Candy Corn </Link>       
                </li>
            </ul>
        </div>
    )


}

export default VendingMachine;