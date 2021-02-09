import React, { Component } from 'react';
import { Grid, Cell, Link } from 'react-mdl';
import {Animated} from "react-animated-css";


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                   
                        <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <h1>Front end web developer</h1>
                            </Animated>

                            <hr/>   
                            <p>HTML/CSS | JavaScript | React</p>
                            <Animated animationIn="bounceInUp" animationOut="slideOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/karl-robert-ruubel-941912193" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                 {/* Github */}
                                 <a href="https://github.com/BleachMartini" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Gmail */}
                                <a href="https://gmail.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </Animated>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Landing;