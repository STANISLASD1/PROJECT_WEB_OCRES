import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Webcam = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://api.windy.com/api/webcams/v2/list/nearby=45.469947,6.907377,5?key=RPMvNR016XMkXaBpxEWMoEJWSIn15eiD'
            )
            .then((res) => setData(res.data));
            
    }, []);
    console.log(data);

    // const title1= "";
    // const iconUrl1= "";
    // const url1= "";
    // const title2= "";
    // const iconUrl2= "";
    // const url2= "";

    // title1 = data.result.webcams[0].title;
    // iconUrl1 = data.result.webcams[0].image.current.icon;
    // url1 = data.result.webcams[0].url.current.desktop;
    // title2 = data.result.webcams[1].title;
    // iconUrl2 = data.result.webcams[1].image.current.icon;
    // url2 = data.result.webcams[1].url.current.desktop; 
    
    return (
        <div className="webcam">
            {(data.result) ? data.result.webcams[0].title : <p>Chargement...</p>}
            {(data.result) ? data.result.webcams[1].title : <p>Chargement...</p>}
        </div>
    )
}; 

export default Webcam;
