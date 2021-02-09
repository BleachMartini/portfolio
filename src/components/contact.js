import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return(
           <div className='contact-body'>
               <Grid className='contact-grid'>
                   <Cell col={6}>
                       <h2>Karl Robert Ruubel</h2>
                       <img
                            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-256.png"
                            alt="avatar"
                            style={{height: '250px'}}
                         />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                        has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                   </Cell>
                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>

                        <div className='contact-list'>

                            <List>
                            <ListItem>
                                <ListItemContent  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-phone-square' aria-hidden='true'/>
                                (+372) 56506426
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-envelope-square' aria-hidden='true'/>
                                karlruubel@gmail.com 
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-skype' aria-hidden='true'/>
                                karl ruubel
                                </ListItemContent>
                            </ListItem>
                            </List>

                        </div>
                   </Cell>
               </Grid>
           </div> 
        )
    }
}

export default Contact;