import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
	render(){
		return (
			<div>
				<h3 style={{color: 'orange'}}>Home of a </h3>
				<Link to="about">Go to about page</Link>
			</div>
		)
	}
}

export default Home;