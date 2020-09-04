import React, {createRef, Fragment} from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import MarkerItem from './MarkerItem';
import '../style/style.less';
import '../style/AppMap.less';
import PlacesList from './PlacesList';


class AppMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLocation: false,
            isLoading: false,
            isLoaded: true,
            mapCenter: {
                lat: 51.505,
                lng: -0.09,
            },
            userMarkers: [],
            showMarkers: [],
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
        const {showMarkers, userMarkers} = this.state;
        this.setState({
            userMarkers: [...userMarkers, position],
            showMarkers: [...showMarkers, position]
        });
    }
    saveUserMarkers = () => {
        const {userMarkers} = this.state;
        if (userMarkers.length) {
            this.setState({showMarkers: []});
        } else {
            alert("There aren't markers");
        }
    }
    showUserMarkers = () => {
        const {userMarkers, showMarkers} = this.state;
        if (showMarkers.length) {
            alert("Сперва сохраните свои метки!",);
        } else {
            this.setState({showMarkers: [...showMarkers, ...userMarkers]});
        }
    }
    showRestaurants = (data) => {
        const {showMarkers} = this.state;
        this.setState({showMarkers: [...showMarkers, [...data.latlng]]})
    }
    delay = () => {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
    downloadPlaces = () => {
        this.setState({isLoading: true, isLoaded: true});
        this.delay().then(() => {
            this.setState({isLoading: false})
        });
    }


    render() {
        const {hasLocation, isLoaded, mapCenter, showMarkers} = this.state;
        return (
            <Fragment>
                <div className="mb-2 wrapper wrapper-row">
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
                        showMarkers.map(item => {
                            return <MarkerItem position={item}/>
                        })
                    }
                    {hasLocation ? 
                        <MarkerItem position={this.state.mapCenter}/> :
                        null
                    }

                    </LeafletMap>
                    {
                        isLoaded ? 
                        <PlacesList isLoading={this.state.isLoading} showRestaurants={this.showRestaurants} /> :
                        <button onClick={this.downloadPlaces} class="btn btn-primary download">Загрузить список мест</button>
                    }
                </div>
                <div className="map-buttons">
                    <div className="wrapper wrapper-row wrapper-space-beetween">
                        <button onClick={this.getLocate} class="btn btn-info ">Где я?</button>
                        <button onClick={this.saveUserMarkers} class="btn btn-danger ">Сохранить/скрыть метки</button>
                        <button onClick={this.showUserMarkers} class="btn btn-primary ">Показать сохраненные метки</button>
                    </div>
                </div>
                
            </Fragment>    
        );
    }
}

export default AppMap