//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function Meteo() {


    return (
        <div>
            <Card>
                <CardContent>
                    <iframe src="https://www.meteoblue.com/fr/meteo/widget/daily/tignes_france_2972607?geoloc=fixed&days=3&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&spot=0&pressure=0&layout=light"  frameborder="0" scrolling="YES"  style={{width: "25vh", height:"50vh"}}> </iframe>
                </CardContent>
            </Card>

        </div>
    );
}