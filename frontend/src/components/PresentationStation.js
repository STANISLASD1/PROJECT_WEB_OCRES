//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function PresentationStation() {


    return (
        <div>
            <Card >
                <CardContent style={{maxHeight: "80vh", maxWidth:"100vh"}}>
                    <iframe id="iframe_mod" src="https://www.france-montagnes.com/embed?station=730049&language=fr" width="700" height="580" frameborder="0" allowfullscreen></iframe>
                </CardContent>
            </Card>

        </div>
    );
}