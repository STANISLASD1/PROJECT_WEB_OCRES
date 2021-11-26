//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function PlanPiste() {


    return (
        <div>
            <Card style={{minWidth: "50vh"}}>
                <CardContent>
                    Api plan des pistes 
                    <iframe src="http://www.locatignes.com/medias/images/plan-pistes.jpg"  frameborder="0" scrolling="YES" style={{width: "50vh", height:"35vh"}}> </iframe>
                </CardContent>
            </Card>

        </div>
    );
}