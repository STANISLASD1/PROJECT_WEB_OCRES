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
import Graphique from './Graphique';

export default function Main() {


    return (
        <>
        <div className="container justify-content-center">
            
            <div className="row">
                <div className="col-md-3">
                    <Meteo />
                </div>
                <div className="col-md-6">
                    <Video />
                </div>
                <div className="col-md-3">
                    <ConditionSki />
                </div>
            </div>
            <br />
            <div className="row justify-content-center">
                <div className="col-md-7"> 
                    <PresentationStation />
                </div>
            </div>
            <br />
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <Graphique />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <Webcam />
                </div>
                <div className="col-md-6"> 
                    <Photo />
                </div>
            </div>
            <br />
        </div>    
        </>
    );
}