import React, { useState } from "react";

export function Card({front, back}){
    const [checkCard, setCheckCard] = React.useState(false);
    const handleClick = () => {
        setCheckCard(!checkCard);
    }
    const className = `card ${checkCard ? 'card-check': ''}`
    return (
        
        <div className={className} onClick={handleClick} data-back={back}>{front}</div>
    )
}