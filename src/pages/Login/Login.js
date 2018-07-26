import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Login.css';

type Props = {};
type State = {};

export default class Login extends Component<
	Props & RouteComponentProps,
	State
> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { title } = this.props.history.location.state;
		return (
			<div className="container">
				<div className="login-box">
					<p className="title">{title}</p>
				</div>
			</div>
		);
	}
}
