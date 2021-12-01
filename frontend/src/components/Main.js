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
        <div className="container">
            
            <div className="row">
                <div className="col-md-3">
                    <Meteo></Meteo>
                </div>
                <div className="col-md-6">
                    <Video></Video>
                </div>
                <div className="col-md-3">
                    <PlanPiste></PlanPiste>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-7"> 
                    <PresentationStation />
                </div>
                <div className="col-md-5">
                    <ConditionSki></ConditionSki>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <Webcam></Webcam>
                </div>
                <div className="col-md-6"> 
                    <Photo></Photo>
                </div>
            </div>
            <br />
        </div>    
        </>
    );
}