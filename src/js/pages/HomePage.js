import React, { Component } from 'react';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        
    }

	render() {
		return (
			<div className="">
                <h1>首页</h1>
            </div>
		);
	}

}

export default HomePage;
