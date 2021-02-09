import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

toggleCategories() {
    if(this.state.activeTab === 0) {
        return (
            <div className='projects-grid'>

            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}} >Portfolio page</CardTitle>
                <CardText>
                    Portfolio page made with React Router.
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/BleachMartini/myportfoliopage">GitHub</Button>
                    <Button colored href="https://bleachmartini.github.io/myportfoliopage/">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

          </div>)
    }else if(this.state.activeTab === 1) {
        return (
          <div>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://sigao.io/wp-content/uploads/2018/08/angular-card.png) center / cover'}} >React Project #1</CardTitle>
                <CardText>
                    TBA
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
          </div>
        )
      } else if(this.state.activeTab === 2) {
        return (
          <div><Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://miro.medium.com/max/1838/1*6ahbWjp_g9hqhaTDSJOL1Q.png)center /cover'}} >Movie Search app</CardTitle>
          <CardText>
              Movie search app, done with public OMDb API. 
          </CardText>
          <CardActions border>
              <Button colored href="https://github.com/BleachMartini/js-movie-app">GitHub</Button>
              <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
      </Card></div>
        )
      } 
}

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                     
            </div>
        )
    }
}

export default Projects;