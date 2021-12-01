//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function Video() {


    return (
        <div>
            <Card>
                <CardContent>
                    <h1 style={{textAlign: "center" }}>Tigne - Office de tourisme </h1>  
                    <iframe  src="https://www.youtube-nocookie.com/embed/uGsGhPhGLDE?controls=0" title="Video Tigne" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{width: "40vw", height:"40vh"}} ></iframe>
                </CardContent>
            </Card>

        </div>
    );
}