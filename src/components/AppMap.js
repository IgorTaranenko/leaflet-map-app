import React, {createRef, Fragment} from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import MarkerItem from './MarkerItem';
import PlacesList from './PlacesList';
import '../style/AppMap.less';
import '../style/style.less';


class AppMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLocation: false,
            isLoading: false,
            isLoaded: false,
            mapCenter: {
                lat: 51.505,
                lng: -0.09,
            },
            zoom: 6,
            myLocate: null,
            userMarkers: [],            
            saveUserMarkers: [],
            restaurantsMarkers: [],
            bikeSheltersMarkers: []
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
            mapCenter: e.latlng,
            myLocate: e.latlng
        })
    }

    // Установка, сохранение, показ маркеров
    setMarker = (e) => {
        const position = {lat: e.latlng.lat, lng: e.latlng.lng};
        const {userMarkers} = this.state;
        let name = prompt('Введите имя маркера', '');
        if (name == null) return;
        if (name !== '') {
            this.setState({
                userMarkers: [...userMarkers, {position, name}],
            });
        } else {
            name = prompt('Введите непустое имя маркера', '');
            if (name == null) return;
            if (name) {
                this.setState({
                    userMarkers: [...userMarkers, {position, name}],
                });    
            } else {
                return null
            }             
        }
    }

    saveUserMarkers = () => {
        const {userMarkers, saveUserMarkers} = this.state;
        if (userMarkers.length) {
            this.setState({saveUserMarkers: [...saveUserMarkers, ...userMarkers], userMarkers: []});
        } else {
            alert("Нет маркеров!");
        }
    }

    showUserMarkers = () => {
        const {userMarkers, saveUserMarkers} = this.state;
        if (userMarkers.length) {
            alert("Сперва сохраните свои метки!",);
        } else {
            this.setState({userMarkers: saveUserMarkers, saveUserMarkers: []});
        }
    }
    // 

    delay = () => {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    downloadPlaces = () => {
        this.setState({isLoading: true, isLoaded: true});
        this.delay().then(() => {
            this.setState({isLoading: false})
        });
    }

    showRestaurants = (data) => {
        const {restaurantsMarkers} = this.state;
        if (!restaurantsMarkers.length) {
            const restaurantsPositions = data.map(item => {
                return {position: {lat: item.latlng[0], lng: item.latlng[1]}, name: item.name}
            });
            this.setState({restaurantsMarkers: restaurantsPositions, mapCenter: restaurantsPositions[0].position, zoom: 12});
        }   else {
            this.setState({restaurantsMarkers: []});
        }
    }
    showBikeShelters = (data) => {
        const {bikeSheltersMarkers} = this.state;
        if (!bikeSheltersMarkers.length) {
            const bikeSheltersPositions = data.map(item => {
                return {lat: item.latlng[0], lng: item.latlng[1], name: item.name}
            });
            console.log(bikeSheltersPositions)
            this.setState({bikeSheltersMarkers: bikeSheltersPositions, mapCenter: bikeSheltersPositions[0], zoom: 10});
        } else {
            this.setState({bikeSheltersMarkers: []});
        }
    }
    componentDidUpdate() {
        console.log('userMarkers', this.state.userMarkers);
        console.log('restaurantsMarkers', this.state.restaurantsMarkers);
        console.log('.....');
    }

    render() {
        const {hasLocation, isLoaded, mapCenter, userMarkers, restaurantsMarkers, bikeSheltersMarkers, myLocate} = this.state;
        return (
            <Fragment>
                <div className="mb-2 wrapper wrapper-row">
                    <LeafletMap
                        ref={this.mapRef}
                        center={this.state.mapCenter}
                        zoom={this.state.zoom}
                        onLocationfound={this.handleLocationFound}
                        onClick={this.setMarker}
                        minZoom={2}
                        maxZoom={13}
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
                    >
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        continuousWorld={false}
                        noWrap={true}
                    />
                    {
                        userMarkers.map(item => {
                            return <MarkerItem position={item.position} name={item.name}/>
                        })
                    }
                    {
                        restaurantsMarkers.map(item => {
                            return <MarkerItem position={item.position} name={item.name}/>
                        })
                    }
                    {
                        bikeSheltersMarkers.map(item => {
                            return <MarkerItem position={item} />
                        })
                    }
                    {hasLocation ? 
                        <MarkerItem position={myLocate} name='Ваша геолокация!'/> :
                        null
                    }

                    </LeafletMap>
                    {
                        isLoaded ? 
                        <PlacesList isLoading={this.state.isLoading} showRestaurants={this.showRestaurants} showBikeShelters={this.showBikeShelters}/> :
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