//import { useState, useEffect } from 'react';
import * as React from 'react';

import Meteo from './Meteo';
import ConditionSki from './Conditions';
import Video from './Video';
import PlanPiste from './PlanPiste';
import Webcam from './Webcam'
import Photo from './Photo'
import PresentationStation from './PresentationStation';
import medium from "../img/neige.jpeg"; 
export default function Main() {


    return (
        <>
        
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", }}>
                    <div>
                    <Meteo></Meteo>
                   </div>
                   <div>
                    <Video></Video>
                   </div>
                   <div>
                    <PlanPiste></PlanPiste>
                </div>
                </div>
                <div >
                    <div> 
                        <PresentationStation />
                    </div>
                   <div>
                       <ConditionSki></ConditionSki>
                   </div>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <div>
                    <Webcam></Webcam>
                </div>
                <div> 
                    <Photo></Photo>
                </div>
                
            </div>
           
               
            
        </>
    );
}