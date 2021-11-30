//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function Photo() {


    return (
        <div>
            <Card style={{maxWidth: "45vw", maxHeight:"50vh", marginTop:"10px"}}>
                <CardContent>
                   <h1> Voici notre API photo </h1> 
                    <iframe src="https://media.gettyimages.com/photos/tignes-picture-id153532052?k=20&m=153532052&s=612x612&w=0&h=Jaad1Fi1-0EELJTYhvFTZH0K_9eDFMCSTqdl7c4pjj0="  frameborder="0" scrolling="YES" style={{width: "100vh", height:"35vh"}}> </iframe>
                </CardContent>
            </Card>

        </div>
    );
}