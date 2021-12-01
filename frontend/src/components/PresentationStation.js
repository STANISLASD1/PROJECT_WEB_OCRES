//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function PresentationStation() {


    return (
        <div>
            <Card >
                <CardContent>
                    <iframe id="iframe_mod" src="https://www.france-montagnes.com/embed?station=730049&language=fr" style={{width: "50vw", height:"60vh"}} frameborder="0" allowfullscreen></iframe>
                </CardContent>
            </Card>

        </div>
    );
}