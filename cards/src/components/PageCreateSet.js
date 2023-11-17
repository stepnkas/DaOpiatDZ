import React from 'react';
import { Outlet, Route } from 'react-router-dom';
import { Header } from './Header';
import {FromCreateSet} from './FromCreateSet';
import { FromCreateCard } from './FromCreateCard';

export function PageCreateSet(){
    return <div>
        <Header />
        <h2>Создание сета карточке</h2>
        <Outlet />
        {/* <FromCreateSet />
        <FromCreateCard /> */}
    </div>
}