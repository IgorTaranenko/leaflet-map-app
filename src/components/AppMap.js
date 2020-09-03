import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import '../style/style.less'


class AppMap extends React.Component {
    render() {
        return (
            <LeafletMap
                center={[50, 10]}
                minzoom={6}
                zoom={6}
                minZoom={2}
                maxZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                continuousWorld={false}
                animate={true}
                easeLinearity={0.35}
                noWrap={true}
                maxBounds={[[-85.0, -180.0],[85.0, 180.0]]}
                continuousWorld={false}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    continuousWorld={false}
                    noWrap={true}
                />
                <Marker position={[50, 10]}>
                    <Popup>
                        Popup for any custom information.
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}

export default AppMap