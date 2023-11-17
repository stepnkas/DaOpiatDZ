import React from "react";
import { Header } from "./Header";
import { BtnSet } from "./BtnSet";


export function PageSelectSet(){
    const cards = require('../data');
    const sets = cards.reduce(
        (acc, item) => {
            if (acc.map[item.setName])
                return acc;
            acc.map[item.setName] = true;
            acc.sets.push(item.setName);
            return acc;
        },
        {
            map: {},
            sets: [],
        }
    ).sets.map((item, index)=>(
        <BtnSet key={index} name={item} id={index}/>
    ));
    return (
    <div>
        <Header />
        <h2>Выбор сетов</h2>
        <ul className="set-list">
            {sets}
        </ul>
    </div>
    );
}