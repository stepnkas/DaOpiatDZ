import { Butenn } from "./Butenn";
import { Card } from "./Card";
import React from "react";
import data from '../data.json';
import { useLocation, useParams } from "react-router-dom";

export function Set() {

    const lication = useLocation()
    const {set} = lication.state;

    const param = useParams();
    console.log(param.id);

    const cards = require('../data').filter((item) => (item.setName === set));
    const da = 0;
    const [step, setStep] = React.useState(0);
    const [formValid, setFormValid] = React.useState(false);
    const nextNextId = () => {
        
        if (step < cards.length- 1) {
            setStep(step + 1);
        }
    }
    const minysId = () => {
        if (step > 0) {
            setStep(step - 1);
        }
        
    }
    return (
        <div>
            <h2>Название карточки</h2>
            <div>
                
                <Card 
                    front={cards[step].front}
                    back={cards[step].back}
                    key={cards[step].id}
                />
            </div>
            {/* <button onClick={nextNextId}>
                dasfsdfsd
            </button> */}
            {/* <Butenn 
                onClick={nextNextId}
                id={cards[step].id}
                
            /> */}
            <div className="buttenDiv">
                <button disabled={step == 0} onClick={minysId}> ◄--- </button>
                <p>{step + 1} / {cards.length}</p> 
                <button disabled={step == cards.length - 1} onClick={nextNextId}> ---► </button>
            </div>
        </div>
    );
}