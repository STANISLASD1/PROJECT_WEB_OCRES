//import { useState, useEffect } from 'react';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

export default function Graphique() {

    return (
        <div>
            <Card>
                <CardContent>
                    <h1 style={{textAlign: "center" }}>Météo graphique</h1>
                    <iframe src="https://my.meteoblue.com/visimage/meteogram_web?look=KILOMETER_PER_HOUR%2CCELSIUS%2CMILLIMETER&apikey=5838a18e295d&temperature=C&windspeed=kmh&precipitationamount=mm&winddirection=3char&city=Tignes&iso2=fr&lat=45.496&lon=6.92463&asl=1802&tz=Europe%2FParis&lang=fr&sig=f6b0bc3b2c47c870fa2b7545111eb17f"  frameborder="0" scrolling="no" style={{width: "160vh", height:"62vh"}}> </iframe>
                </CardContent>
            </Card>

        </div>
    );
}