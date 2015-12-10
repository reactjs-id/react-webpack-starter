import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
	render(){
		return (
			<div>
				<h3>Home of a monkey</h3>
				<Link to="about">Go to about page</Link>
			</div>
		)
	}
}

export default Home;