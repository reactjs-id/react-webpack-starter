import React from 'react';
import {Col} from 'react-bootstrap';

class Parkiran extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Col md={12}>
			{this.props.children}
			</Col>
		)
	}
}

export default Parkiran;