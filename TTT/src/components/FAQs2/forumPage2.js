import React, { Component } from 'react';
import Spacer from 'react-add-space';

import './forumPage2.css';
import './responsiveForum2.css';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import bgImage from '../Images/aboutUs.png';


class ForumPage2 extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="img-responsive" src={bgImage} id="bgImage" />
                    <div className="top-left"><i className="fa fa-signal" style={{ color: '#F89E12' }} />
                        <Spacer amount={1} />
                    VAP IoT lab</div>
                    <div className="top-left1" style={{ }}>Home</div>
                    <div className="top-left2" style={{ }}>About</div>
                    <div className="top-left3" style={{ }}>Blogs</div>
                    <div className="top-left4" style={{color:' #F89E12'}}>Forum</div>
                    <div className="top-left5" style={{ }}>Contact</div>
                    <button className="top-left6" id="btn" style={{ fontFamily:"Myriad pro Semibold" }}>Logout</button>


                    <div className="section">

                        <div id="container" style={{ backgroundColor: '', }}>
                            <div id="middleSection" style={{  }}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <a href="" id="aforumTag" style={{ }}>Forum <Spacer amount={1} />
                                            <ion-icon name="chevron-back-outline" id="iconsLessthan" style={{ color: 'white', paddingTop: '3px' }}></ion-icon>
                                        </a>

                                        <p id="vapID" style={{}}> VAPIoT-HANDS ON/COMPILER</p>
                                    </div>
                                    <h2 id="h2Tag" style={{ }}>VAP IoT- HANDS ON / COMPILER</h2>
                                    <p id="pTag2" style={{  }}>Moderator: Ben Jhone. ST</p>
                                </div>

                                <div className="row" id="midRow" style={{ }}>

                                    <p id="pTag3" style={{ }}>Display topics from previous:</p>
                                    <Spacer amount={3} />

                                    <select id="iconss" className="options" style={{ }}>
                                        <option className="bghover-o">All Topics</option>
                                        <option className="bghover-o">All posts </option>
                                        <option className="bghover-o">1 day</option>
                                        <option className="bghover-o">7 days</option>
                                        <option className="bghover-o">2 weeks</option>
                                        <option className="bghover-o">1 month</option>
                                        <option className="bghover-o">3 months</option>
                                        <option className="bghover-o">6 months</option>
                                        <option className="bghover-o">1 year</option>
                                    </select>
                                    <Spacer amount={4} />
                                    <p id="pTag4" style={{ }}>Sort by:</p>
                                    <Spacer amount={3} />
                                    <select id="secondDdown" className="options" style={{ }}>
                                        <option>Post time</option>
                                        <option>Author</option>
                                        <option>Subject</option>
                                    </select>
                                    <Spacer amount={4} />
                                    <div style={{ resize: 'none' }}>
                                        <textarea className="portGo">
                                            GO
                                        </textarea>
                                    </div>
                                    <Spacer amount={5} />
                                    <button id="searchBtn" style={{ }}>
                                        search | <Spacer amount={22} /><i className="fa fa-search" id="searchIcon" style={{ color: '#ffb33a' }} />
                                    </button>
                                </div>
                                <hr style={{
                                    color: '#ffffff',
                                    backgroundColor: '#ffffff',
                                    height: '-1px'

                                }} />


                                <div className="container-fluid">
                                    <div id="" style={{ color: 'white' }}>
                                        <h4 className="jhn" style={{ color: '#ffb33a' }}>Jhone</h4>
                                        <p className="ptag1">Benn</p>
                                        <p className="ptag2">Posts 8</p>
                                        <p className="ptags">joined 8.Oct.2019</p>
                                        <p className="ptags">1517</p>
                                    </div>

                                    <div className="row">
                                        <div className="vertical" id="verticalLine1"></div>
                                        <div>
                                            <h3>VAPIoT-HANDS ON/COMPILER</h3>
                                            <p className="ben" id="benName" style={{}}>By Ben jhone. ST <ion-icon name="chevron-forward" className="iconsLessthan" style={{ color: 'white', paddingTop: '3px' }}></ion-icon>
                                            <ion-icon name="chevron-forward" className="iconsLessthan" style={{ color: 'white', paddingTop: '8px' }}></ion-icon> <h6 id="h6Tag" style={{}}>wed 3 May 2017</h6>
                                           <h5 style={{color:'white'}}> Hello </h5> </p>
                                           <br />
                                           <p className="textSection">
                                               I am new here. I have very strange problem with game that I installed, but I can't start the game.
                                               <br/>
                                               I come only to select type of game:
                                               <br/>
                                               1. Journey by story
                                               <br />
                                               2. Adventure
                                               <br/>
                                               But, there is no matter, what I seleect. Then I get black screen with the little bird on right down corner.
                                               <br />
                                               Maybe do-do bird? Then I wait....And wait....Maybe few minutes. And nothing.
                                               <br />
                                               Then I use Task Manager and kill process syberia.exe - or something similar.
                                               <br />
                                               What I am doing wrong? Should I uninstall the game and install again?
                                            </p>
                                            <hr id="hrTag" style={{ }} />
                                        </div>
                                    </div>

                                    <div className="" style={{ color: 'white' }}>
                                        <h4 className="jhn" style={{ color: '#ffb33a' }}>gail</h4>
                                        <p className="ptag1">Benn</p>
                                        <p className="ptag2">Posts 8</p>
                                        <p className="ptags">joined 8.Oct.2019</p>
                                        <p className="ptags">1517</p>
                                    </div>

                                    <div className="row">
                                        <div className="vertical" id="verticalLine2" style={{}}></div>
                                        <div>
                                            <h3>Re: Syberia 3 wont start</h3>
                                            <p className="ben" id="benName1" style={{}}>By gail <ion-icon name="chevron-forward" className="iconsLessthan" style={{ color: 'white', paddingTop: '3px' }}></ion-icon>
                                            <ion-icon name="chevron-forward" className="iconsLessthan" style={{ color: 'white', paddingTop: '8px' }}></ion-icon> <h6 id="h6Tag1" style={{}}>wed 3 May 2017</h6>
                                           </p>
                                            <br/>
                                           <p className="textSection">
                                               Hi and welcome ponny. You could try contacting Microids directly at this link:
                                               <br/>
                                               htttp://support.syberia3.com/en/support/home  
                                              
                                            </p>
                                            <hr id="hrTag1" style={{ }} 
                                            />
                                        </div>
                                    </div>

                                </div>






                            </div>

                        </div>
                    </div>


                    <div className="footer" style={{ backgroundColor: 'black', paddingTop: '4px' }}>
                        <div className="Row1"  style={{ paddingLeft: '30px', width: '90%' }}>
                            <div className="Column" id="startFooterpart" style={{}}>
                                2019  VAP IoT Lab , All Rights  Reserved
                        </div>
                            <div className="Column"  id="middleFooterpart" style={{ }}>
                                Follow us on <br />
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12', fontSize: 'large' }} />  </a>
                            </div>
                            <div className="Column">
                                <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="fa fa-commenting-o" style={{ border: '8px solid orange', color: 'white', backgroundColor: '#f89e12', fontSize: '30px' }} />  </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div >
        )
    }


}

export default ForumPage2;