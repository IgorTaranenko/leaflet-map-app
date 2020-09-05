import React, {Fragment, useState} from 'react';
import { Spinner } from 'react-bootstrap';
import bike_shelters from '../json/bike_shelters.json';
import restaurants from '../json/restaurants.json';

const PlacesList = (props) => {
	const [restStyle, setRestStyle] = useState('places-list-item');
	const [bikeStyle, setBikeStyle] = useState('places-list-item');
	const getRestaurants = () => {
		if (restStyle === 'places-list-item') {
			setRestStyle('places-list-item checked');
		} else {
			setRestStyle('places-list-item');
		}
		const restaurantsList = restaurants.restaurants.map(item => {
			return {
				id: item.id,
				name: item.name,
				latlng: [item.latlng.lat, item.latlng.lng],
			}
		});
		props.showRestaurants(restaurantsList);
	}
	const getBikeShelters = () => {
		if (bikeStyle === 'places-list-item') {
			setBikeStyle('places-list-item checked');
		} else {
			setBikeStyle('places-list-item');
		}
		const bikeSheltersList = bike_shelters.features.map(item => {
			return {
				name: item.properties.name,
				latlng: [item.geometry.coordinates[1], item.geometry.coordinates[0]]
			}
		});
		props.showBikeShelters(bikeSheltersList);
	}
	
	return (
		<Fragment>
			{
				props.isLoading ? 
				<div className="ml-4">
					<Spinner animation="border" />
				</div> :
				<div className="ml-5">
					<h3>Список мест:</h3>
					<ul className="places-list">
						<li onClick={getRestaurants} className={restStyle}>Рестораны</li>
						<li onClick={getBikeShelters} className={bikeStyle}>Аренда велосипедов</li>
					</ul>
				</div>			}
		</Fragment>
	);
}

export default PlacesList;