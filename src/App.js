import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import Background from './assets/main_bg.png';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

class MainRouter extends Component {
	render() {
		return (
			<div className="container">
				<img
					alt="back"
					src={Background}
					style={{
						width: '100%',
						bottom: 0,
						right: 0,
						position: 'fixed'
						// transform: 'translateX(-50%,-50%)'
					}}
				/>
				<div style={{ zIndex: 100, display: 'flex', flex: 1, width: '100%' }}>
					<Route exact path={'/'} component={Main} />
					<Route exact path={'/login'} component={Login} />
				</div>
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
