import React from 'react';
import {Marker, Popup} from 'react-leaflet';

const MarkerItem = (props) => {
	const {position} = props;
	return (
		<Marker position={position}>
        	<Popup>
                Ваша геолокация!
            </Popup>
		</Marker>
	);
}

export default MarkerItem;