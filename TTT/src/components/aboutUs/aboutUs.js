import React, { Component } from 'react';
import Spacer from 'react-add-space';
// import ReactTable from "react-table"; 

import './aboutUs.css';
import './responsiveAboutus.css';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import aboutUs from '../Images/aboutUs.png';
import arrowlogo from '../Images/arrowlogo.png';

import nust from '../Images/logo1.png';
import logo2 from '../Images/logo2.png';
import sliverBack from '../Images/logo3.png';
import HEC from '../Images/logo4.png';


class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="img-responsive" src={aboutUs} id="bgImage" style={{}} />
                    <div className="top-left"><i className="fa fa-signal" style={{ color: '#F89E12' }} />
                        <Spacer amount={1} />
                    VAP IoT lab</div>
                    <div className="top-left1" style={{}}>Home</div>
                    <div className="top-left2" style={{color:'#F89E12'}}>About</div>
                    <div className="top-left3" style={{ }}>Blogs</div>
                    <div className="top-left4" style={{ }}>Forum</div>
                    <div className="top-left5" style={{ }}>Contact</div>
                    <button className="top-left6" id="btnlogout" style={{}}>Logout</button>

                    <div className="section">
                        <div className="top-center">
                            <hr id="hr1" style={{ }} />
                            VAP IoT Lab
                            <hr id="hr2" style={{   }} />
                        </div>

                        <div className="container" id="section1" style={{ }}>
                            <div className="row" style={{ backgroundColor: 'white'}} >
                                <div className="column" style={{ backgroundColor: 'white'}} >
                                    <img className="img-responsive" src={arrowlogo} style={{ width: '50%', float: 'left', postion: 'absolute', marginTop: '-3%', marginRight: '-15%' }} />
                                    <h2 style={{ fontSize: '28px', marginTop: '13%', letterSpacing: '-1px', fontFamily: 'Roboto', color: 'black' }}><b>About us</b></h2>
                                    <hr style={{
                                        color: '#feb33e',
                                        backgroundColor: '#feb33e',
                                        height: 1,
                                        width: '90px',
                                        top: '45px',
                                        marginLeft: '36%'
                                    }} />
                                    <p style={{ backgroundColor: 'white', fontSize: '10px', marginLeft: '36%' }}>ware like Aldus PageMaker including versions of Lorem  Ipsum lorem ipsum</p>
                                </div>
                                <div className="column" style={{ backgroundColor: 'white'}} >
                                    <p style={{ backgroundColor: 'white', fontSize: '10px', textAlign: 'left', marginTop: '2%' }}>
                                        Lorem Ipsum is simply dummy text of the printing and the setting industry.Lorem Ipsum has been the industry's dummy text
                                        ever since the 1500s, when an unknown printer took a gallery of type and speicmen book. It has survived not only five centuries, but also the leap into electronic typesetting
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages, and more recently with desktop publishing software like Aldus PageMaker iincluding versions Lorem Ipsum lorem ipsum.
                                    </p>
                                    <div className = "vertical1" id="aboutUs">
                                        <aside>
                                            <h5>About us</h5>
                                        </aside>

                                    </div> 
                                    <div className = "vertical2">Partners</div> s

                                    <div className="row2">
                                        <div className="column2">
                                            <img src={nust} alt="nust" style={{}} />
                                        </div>
                                        <div className="column2">
                                            <img src={logo2} alt="logo2" style={{}} />

                                        </div>
                                        <div className="column2">
                                            <img src={sliverBack} alt="silverBack" style={{}} />
                                        </div>
                                        <div className="column2">
                                            <img src={HEC} alt="HEC" style={{}} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div> 


                        <div>
                            <div className="" style={{ top: '70%', width: '65%', marginLeft: '23%',position: 'absolute' }}>
                                <div className="row1">
                                    <div className="column1">
                                        <h2><b>Provide</b></h2>
                                        <hr style={{
                                            color: '#feb33e',
                                            backgroundColor: '#feb33e',
                                            height: 1,
                                            left:'-3px',
                                            width: '75px',
                                            top: '45px',
                                        }} />
                                        <p style={{ color: 'white', backgroundColor: 'transparent' }}>
                                            Lab course manuals and handouts<br />
                                            Support blog / forum for student
                                        </p>
                                    </div>
                                    {/*  */}
                                    <div className="column1" style={{ paddingLeft: '12%' }}>
                                        <h2><b>VAP</b></h2>
                                        <hr style={{
                                            color: '#feb33e',
                                            backgroundColor: '#feb33e',
                                            height: 1,
                                            width: '45px',
                                            top: '45px',
                                        }} />
                                        <p style={{ color: 'white', backgroundColor: 'transparent' }}>
                                            VAP (Virtually Acessible Physical) IoT Lab
                                            to universities and students
                                        </p>
                                    </div>
                                    <div className="column1" style={{ paddingLeft: '22%' }}>
                                        <h2><b>Target</b></h2>
                                        <hr style={{
                                            color: '#feb33e',
                                            backgroundColor: '#feb33e',
                                            height: 1,
                                            width: '65px',
                                            top: '45px',
                                        }} />
                                        <p style={{ color: 'white', backgroundColor: 'transparent' }}>
                                            Education and Training
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>






                    </div>


                    <div className="footer" style={{ backgroundColor: 'black', paddingTop:'12.5%', }}>
                        <div className="Row1" style={{ paddingLeft: '30px', width: '90%' }}>
                            <div className="Column" style={{ color: 'white', fontSize: '15px' }}>
                                2019  VAP IoT Lab , All Rights  Reserved
                        </div>
                            <div className="Column" style={{ color: 'white', fontSize: '12px', paddingLeft: '15%' }}>
                                Follow us on <br />
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12', fontSize: 'medium' }} /> |</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12', fontSize: 'medium' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12', fontSize: 'medium' }} />  </a>
                            </div>
                            <div className="Column">
                                <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="	fa fa-commenting-o" style={{ border: '8px solid orange', color: 'white', backgroundColor: '#f89e12', fontSize: '30px' }} />  </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default AboutUs;