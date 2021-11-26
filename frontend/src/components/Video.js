//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function Video() {


    return (
        <div>
            <Card style={{maxWidth: "50vh"}}>
                <CardContent>
                    <h1>APi vidéos</h1>  
                   <iframe width="80%" height="80%" src="https://www.youtube-nocookie.com/embed/uGsGhPhGLDE?controls=0" title="Video Tigne" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </CardContent>
            </Card>

        </div>
    );
}