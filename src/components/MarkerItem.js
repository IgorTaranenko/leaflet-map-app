import React from 'react';
import {Marker, Popup} from 'react-leaflet';

const MarkerItem = (props) => {
	const {position, name} = props;
	return (
		<Marker position={position}>
        	<Popup>
                {name}
            </Popup>
		</Marker>
	);
}

export default MarkerItem;