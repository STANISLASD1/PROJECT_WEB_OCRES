//import { useState, useEffect } from 'react';
import * as React from 'react';

import Meteo from './Meteo';
import ConditionSki from './Conditions';
import Video from './Video';
import PlanPiste from './PlanPiste';
import Webcam from './Webcam'
import Photo from './Photo'
import PresentationStation from './PresentationStation';

export default function Main() {


    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Meteo></Meteo>
                    <Video></Video>
                    <PlanPiste></PlanPiste>

                </div>
                <div>
                    <PresentationStation />
                    <ConditionSki></ConditionSki>

                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Webcam></Webcam>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Photo></Photo>
            </div>
        </>
    );
}