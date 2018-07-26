import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

class MainRouter extends Component {
	render() {
		return (
			<div className="container">
				<Route exact path={'/'} component={Main} />
				<Route exact path={'/login'} component={Login} />
			</div>
		);
	}
}
const MainRouterWithProps = withRouter(MainRouter);

const App = () => (
	<BrowserRouter>
		<MainRouterWithProps />
	</BrowserRouter>
);

export default App;
