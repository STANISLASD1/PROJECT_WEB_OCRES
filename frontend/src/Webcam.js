//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function webcam() {


    return (
        <div>
            <Card style={{maxWidth: "100vh"}}>
                <CardContent>
                    
                    <iframe src="https://webcams.meteonews.net/webcams/anim/640x480/9413.mp4"  frameborder="0" scrolling="YES" style={{width: "100vh", height:"35vh"}}> </iframe>
                </CardContent>
            </Card>

        </div>
    );
}