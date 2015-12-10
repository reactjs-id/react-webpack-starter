import React, { Component } from 'react';
import {
  Grid, Row, Col, Form, FormGroup, Input, Button
} from 'react-bootstrap';

if(!global.__SERVER__) require('./less/flat-ui.less');

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Grid>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}

export default App;