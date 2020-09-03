import React from 'react';

const App = () => {
	const buttonHandler = (e) => {
		e.preventDefault();
		window.location.assign('/about');
	}
	return(
		<React.Fragment>
			<button class="btn btn-primary" onClick={buttonHandler}>button</button>
			<h1>Hello World</h1>
		</React.Fragment>
	);
}

export default App