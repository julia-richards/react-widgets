import { render } from "@testing-library/react";
import React from "react";

class Clock extends React.Component {
	constructor() {
		super();
		this.state = {
			time: new Date(),
			interval: "",
		};
	}

	tick = (e) => {
		this.setState({
			time: new Date(),
		});
	};

	componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	}

	render() {
		let { time, interval } = this.state;
		return (
			<div>
				{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
			</div>
		);
	}
}

export default Clock;
