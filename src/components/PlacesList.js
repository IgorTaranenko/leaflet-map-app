import React, {Fragment} from 'react';
import { Spinner } from 'react-bootstrap';
import bike_shelters from '../json/bike_shelters.json';
import restaurants from '../json/restaurants.json';

const PlacesList = (props) => {
	const getRestaurants = () => {
		const restaurantsList = restaurants.restaurants.map(item => {
			return {
				id: item.id,
				name: item.name,
				latlng: [item.latlng.lat, item.latlng.lng],
			}
		});
		props.showRestaurants(restaurantsList);
	}
	return (
		<Fragment>
			{
				props.isLoading ? 
				<div className="ml-4">
					<Spinner animation="border" />
				</div> :
				<ul className="places-list">
					<li onClick={getRestaurants} className="places-list-item">Рестораны</li>
					<li className="places-list-item">Аренда велосипедов</li>
				</ul>
			}
		</Fragment>
	);
}

export default PlacesList;