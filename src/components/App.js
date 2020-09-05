import React, {Fragment} from 'react';
import AppMap from './AppMap';
import {connect} from 'react-redux';

const App = (props) => {
	return(
		<Fragment>
			<div>
				<AppMap />
			</div>
		</Fragment>		
	);
}

const mapStateToProps = (state) => {
    return {
        getLocation: state.getLocation
    };
};

export default connect(mapStateToProps, null)(App)
