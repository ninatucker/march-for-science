import React, { Component } from 'react';

class Blurb extends Component {
    render() {
        if (this.props.city.displayBlurb) {
          return (
            <section id="three" className="wrapper style3 special" style={{backgroundColor: "#505393"}}>
                <div className="inner">
                    <header className="major">
                      {/*<h2>About the {this.props.city.name} march</h2>*/}
                    </header>
                    <div style={{width: "100%"}}>
                        <div style={{width: "50%", display: "inline-block"}}>
                            <h3>{this.props.city.blurbHeader}</h3>
                            <img src={this.props.city.blurbPhoto} style={{width: "100%", paddingRight: "20px"}}/>
                        </div>
                        <div style={{width: "50%", display: "inline-block"}}>
                            <p style={{paddingLeft: "20px"}}>{this.props.city.blurb}</p>
                        </div>
                    </div>
                </div>
            </section>
          );
        } else {
            return(<div></div>);
        }
    }
}

export default Blurb;