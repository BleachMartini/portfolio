import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience'

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-256.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />

                        </div>

                        <h2 style={{paddingTop: '2em'}}>Karl Robert Ruubel</h2>
                        <h4 style={{color: 'grey'}}>Junior Front End Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Self taught Front End Web Developer whose skill set involves HTML-CSS, JavaScript, React and Angular.
                            I have been studying aside from my main job and developing my skills as a programmer almost daily.
                            Before I came to the conclusion that I wanted to be a developer, I tried many different fields from logistics to customer support. 
                            Currently I'm trying to transition to the IT field and expand my knowledge in that field.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2002}
                            endYear={2011}
                            schoolName={"Märjamaa Gümnaasium"}
                            schoolDescription={"Estonia, Secondary education"}
                        />
                        
                        <Education
                            startYear={2014}
                            endYear={2016}
                            schoolName={"Tallinna Tehnikakõrgkool "}
                            schoolDescription={"Estonia, Higher education(Unfinished)"}

                        />

                        <hr stylr={{borderTop: '3px solid #e22947'}} />

                        <h2>Relevant Experience</h2>
                        <Experience
                        startYear={2017}
                        endYear={2018}
                        jobName={"Tondi Digiagentuur"}
                        jobDescription={"Internship as Front End Developer for 2 months. Mainly used Wordpress, HTML/CSS, JavaScript and PHP for backend."}
                        />
                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Resume; 