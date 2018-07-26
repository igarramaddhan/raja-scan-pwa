import React, { Component } from 'react';
import './Main.css';
import Kesehatan from '../../assets/kesehatan.png';
import Marketplace from '../../assets/marketplace.jpg';
import OpenHouse from '../../assets/openhouse.png';

let data = [
	{
		image: Kesehatan,
		title: 'Kesehatan',
		color: '#FF614B',
		onClick: () => {}
	},
	{
		image: Kesehatan,
		title: 'Absensi',
		color: '#eec619',
		onClick: () => {}
	},
	{
		image: Marketplace,
		title: 'Marketplace',
		color: '#27BBFF',
		onClick: () => {}
	},
	{
		image: OpenHouse,
		title: 'Open House',
		color: '#2F9E85',
		onClick: () => {}
	}
];

type Props = {
	data: String,
	history: Object
};
type State = {};

export default class Main extends Component<
	Props & RouteComponentProps,
	State
> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderCard({ key, image, title, color, onClick }) {
		return (
			<div
				key={key}
				className="button-container"
				onClick={() =>
					this.props.history.push({
						pathname: '/login',
						state: {
							title
						}
					})
				}
			>
				<div className="button" style={{ backgroundColor: color }}>
					<img
						alt="img"
						src={image}
						style={{
							width: '100%',
							height: '100%',
							borderRadius: '5px 5px 0 0'
						}}
					/>
					<div>
						<p className="title">{title}</p>
					</div>
				</div>
			</div>
		);
	}
	render() {
		return (
			<div className="Container">
				<div className="Content">
					{data.map((val, i) =>
						this.renderCard({
							key: i,
							image: val.image,
							title: val.title,
							color: val.color,
							onClick: val.onClick
						})
					)}
				</div>
			</div>
		);
	}
}

// export default withRouter(Main);
