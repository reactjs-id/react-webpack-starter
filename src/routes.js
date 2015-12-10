import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import HistoryContainer from './utils/HistoryContainer';

import {
	Router, Route, IndexRoute
} from 'react-router';

// Components

import App from './App';
import About from './routes/About';
import Home from './routes/Home';

let history;

if(!global.__SERVER__) history =  (Modernizr && Modernizr.history)? createBrowserHistory(): createHashHistory();
HistoryContainer.set(history);

let routes = (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
		</Route>
	</Router>
)

export default routes;