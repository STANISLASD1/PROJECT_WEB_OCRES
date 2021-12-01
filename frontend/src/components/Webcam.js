//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function webcam() {


    return (
        <div>
            <Card>
                <CardContent>
                    <h1 style={{textAlign: "center" }}>Live-Webcam</h1>
                    <iframe src="https://webcams.meteonews.net/webcams/anim/640x480/9413.mp4"  frameborder="0" scrolling="no" style={{width: "75vh", height:"50vh"}}> </iframe>
                </CardContent>
            </Card>

        </div>
    );
}