import React, { Component } from 'react';
import Spacer from 'react-add-space';
// import ReactTable from "react-table"; 

import './forumPage1.css';
import './responsiveForum1.css';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import bgImage from '../Images/aboutUs.png';


class ForumPage1 extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="img-responsive" src={bgImage} id="bgImage" style={{}} />
                    <div className="top-left"><i className="fa fa-signal" style={{ color: ' #F89E12' }} />
                        <Spacer amount={1} />
                    VAP IoT lab</div>
                    <div className="top-left1" style={{  }}>Home</div>
                    <div className="top-left2" style={{  }}>About</div>
                    <div className="top-left3" style={{  }}>Blogs</div>
                    <div className="top-left4" style={{ }}>Forum</div>
                    <div className="top-left5" style={{ }}>Contact</div>
                    <button className="top-left6" id="btnlogout" style={{}}>Logout</button>

                    <div className="section">

                        <div id="container" style={{ backgroundColor: '', }}>
                            <div id="faqTable">
                                <table className="table" >
                                <thead>
                                    <tr>
                                        <th><b>Serial</b></th>
                                        <th><b>Topic</b></th>
                                        <th><b>Comments</b></th>
                                        <th><b>Last comment</b></th>
                                        <th><b>Users Type</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{padding:'50px',}}>
                                        <td id="td1a"><i className="fa fa-square-o" style={{border:'1px solid white' , color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td id="td2a" >VAPIoT-HANDS ON /COMPILER
                                            <p className="pTag" style={{}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td id="td3a">453</td>    
                                        <td id="td4a">By Kauf.H<br />
                                            <i className="fa fa-calendar" /> sep 23,2018 5:35
                                        </td>
                                        <td id="td5a">
                                            <i className="fa fa-mail-forward" />
                                            <Spacer amount={1}/>
                                            Faculty
                                        </td>

                                    </tr>
                                    <tr className="rowss">
                                        <td id="td1b"><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td id="td2b">EN-GENERAL
                                            <p className="pTag" style={{}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td id="td3b">134</td>
                                        <td id="td4b">By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                            </td>
                                        <td id="td5b"><i className="fa fa-circle" />
                                        <Spacer amount={1}/>

                                        Student</td>

                                    </tr>
                                    <tr>
                                        <td id="td1c"><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td id="td2c">VAPIoT-HANDS ON /COMPILER<br />
                                            <p className="pTag" style={{}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td id="td3c">45</td>
                                        <td  id="td4b">By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                        </td>
                                        <td id="td5c">
                                            <i className="fa fa-circle" />
                                            <Spacer amount={1}/>
                                            Student
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  id="td1d" ><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td id="td2d" >EN-GENERAL
                                        <p className="pTag" style={{}}>VAPIoT community related topics</p>

                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td id="td3d">76</td>
                                        <td id="td4b">By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                        </td>
                                        <td id="td5d"><i className="fa fa-mail-forward" />
                                        <Spacer amount={1}/>
                                        Faculty</td>

                                    </tr>
                                    <tr>
                                        <td  id="td1e"><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        
                                        <td id="td2e">VAPIoT-HANDS ON / COMPILER
                                            <p className="pTag" style={{}}>VAPIoT community related topics</p>
                                             <p style={{ color: '#f89e12' }}>
                                                Moderator. Ben Jhone. ST
                                            </p>
                                        </td>
                                        <td id="td3e">345</td>
                                        <td id="td4b">By Kauf.H<br />
                                            <i className="fa fa-calender" /> sep 23,2018 5:35
                                            </td>
                                        <td id="td5e"><i className="fa fa-circle" />
                                            <Spacer amount={1}/>
                                            Student
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>


                <div className="footer" style={{ backgroundColor: 'black' }}>
                    <div className="Row1" style={{ paddingLeft: '30px', width: '90%' }}>
                        <div className="Column" id="startFooterpart" style={{ }}>
                            2019  VAP IoT Lab , All Rights  Reserved
                        </div>
                        <div className="Column"  id="middleFooterpart" style={{ }}>
                            Follow us on <br />
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12' }} /> |</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12' }} />|</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12' }} />  </a>
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

export default ForumPage1;