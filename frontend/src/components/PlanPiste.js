import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function PlanPiste() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widget.tourisme-lorraine.fr/widgetneige.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);

    return (
        <div>
            <Card style={{maxWidth: "27vw",maxHeight: "55vh", marginTop:"10px"}}>
                <CardContent>
                    <div data-widgetneige="1518.84.66798"></div> 
                    
                </CardContent>
            </Card>

        </div>
    );
}