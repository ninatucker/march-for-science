
import React, { Component } from 'react';

class Map extends Component {
    render() {
        if (this.props.map) {
            return (
                <div style={{paddingBottom: '30px'}}>
                    <iframe src={this.props.map} width="400" height="300" />
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Map;