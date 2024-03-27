import React from "react";
import Rootbeer from "./Rootbeer";
import ChexMix from "./ChexMix";
import CandyCorn from "./CandyCorn";
import "./Items.css"
import { useNavigate, useParams } from "react-router-dom";

const Items = () => {

    const { name } = useParams();
    const navigate = useNavigate();   
    let selectedItem;

    if (name === 'rootbeer') {
        selectedItem = <Rootbeer />;
    } else if (name === 'chexmix'){
        selectedItem = <ChexMix />
    } else if (name === 'candycorn'){
        selectedItem = <CandyCorn />
    }

    const handleBackBtn = () => {
        navigate("/")
    }

    return (
        <div>
            {selectedItem} 
            <button className="backBtn" onClick={handleBackBtn}> Go back </button>
        </div>
    )
}

export default Items;