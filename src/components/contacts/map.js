// import React, { Component } from 'react';

// import Marker from 'pigeon-marker'
// import Overlay from 'pigeon-overlay'



// export default class Maps extends Component {
//     render() {
//         const map = (
//             <Map center={[50.879, 4.6997]} zoom={12} width={600} height={400}>
//                 <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => { }} />

//                 <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
//                     <img src='pigeon.jpg' width={240} height={158} alt='' />
//                 </Overlay>
//             </Map>
//         )
//         return (
//             { map }
//         )
//     }
// }

import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


class Map extends React.Component {
    render() {
        return (
            <LeafletMap
                center={[47.81528, 35.17588]}
                zoom={16}
                maxZoom={20}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={[47.81528, 35.17588]}>
                    <Popup>
                        Popup for any custom information.
          </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}

export default Map