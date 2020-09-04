import React, {createRef, Fragment} from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import {connect} from 'react-redux';
import MarkerItem from './MarkerItem';
import '../style/style.less';
import '../style/AppMap.less';


class AppMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLocation: false,
            mapCenter: {
                lat: 51.505,
                lng: -0.09,
            },
            markers: []
        };    
    }    
    mapRef = createRef();
    getLocate = () => {
        const map = this.mapRef.current
        if (map != null) {
            map.leafletElement.locate()
        }
    }
    handleLocationFound = (e) => {
        this.setState({
            hasLocation: true,
            mapCenter: e.latlng
        })
    }
    setMarker = (e) => {
        const position = {lat: e.latlng.lat, lng: e.latlng.lng};
        const {markers} = this.state;
        let newMarkers = markers.push(position);
        this.setState({
            markers: [...markers, position]
        });
        console.log(this.state.markers);
    }

    render() {
        const {hasLocation, mapCenter, markers} = this.state;
        return (
            <Fragment>
                <div className="mb-2 wrapper">
                    <LeafletMap
                        ref={this.mapRef}
                        center={this.state.mapCenter}
                        minzoom={6}
                        zoom={6}
                        onLocationfound={this.handleLocationFound}
                        onClick={this.setMarker}
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
                        maxBounds={[[-90.0, -180.0],[90.0, 180.0]]}
                        continuousWorld={false}
                    >
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        continuousWorld={false}
                        noWrap={true}
                    />
                    {
                        markers.map(item => {
                            return <MarkerItem position={item}/>
                            console.log(item);
                        })
                    }
                    {hasLocation ? 
                        <MarkerItem position={this.state.mapCenter}/> :
                        null
                    }

                    </LeafletMap>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="map-buttons">
                    <div className="wrapper wrapper-row wrapper-space-beetween">
                        <button onClick={this.getLocate} class="btn btn-info ">Где я?</button>
                        <button class="btn btn-danger ">Сохранить метки</button>
                        <button class="btn btn-primary ">Показать собственные метки</button>
                    </div>
                </div>
                
            </Fragment>    
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLocation: data => dispatch(getLocation(data))
    };
};

export default connect(null, mapDispatchToProps)(AppMap)