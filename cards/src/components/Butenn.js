import React, { useState } from "react";
export function Butenn({front, back, id}){
    const [nextId, setNextId] = React.useState(id);
    const nextNextId = () => {
        if (nextId >= 10) {
            return nextId;
        }
        setNextId(nextId + 1);
    }
    const minysId = () => {
        if (nextId <= 1) {
            return nextId;
        }
        setNextId(nextId - 1);
    }
    
    return (
        <div className="buttenDiv">
            <button onClick={minysId}>  </button>
            <p>{nextId} / 10</p> 
            <button onClick={nextNextId}>  </button>
        </div>
    )
}