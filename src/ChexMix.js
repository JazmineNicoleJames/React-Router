import React from "react";

import chexmix from "./chexmix.gif";

const ChexMix = () => {
    return (
        <div> 
            <h1 className="chexmixGreet"> Save me all your Rye Chips! </h1>
            <img src={chexmix} alt="chexmix"></img>
        </div>
    )
};

export default ChexMix;