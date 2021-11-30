//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function Video() {


    return (
        <div>
            <Card style={{maxWidth: "27vw",maxHeight: "55vh", marginTop: "10px"}}>
                <CardContent>
                    <h1 style={{ color: "grey", textAlign: "center" }}>APi vidéos </h1>  
                   <iframe  src="https://www.youtube-nocookie.com/embed/uGsGhPhGLDE?controls=0" title="Video Tigne" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{width: "25.5vw", height:"45vh"}} ></iframe>
                </CardContent>
            </Card>

        </div>
    );
}