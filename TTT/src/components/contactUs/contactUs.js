import React, { Component } from 'react';
import Spacer from 'react-add-space';

import './contactUs.css';
import './responsiveContact.css';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import bgImage from '../Images/aboutUs.png';


class ContactUs extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="img-responsive" src={bgImage} id="bgImage" style={{  }} />
                    <div className="top-left"><i className="fa fa-signal" style={{ color: '#F89E12' }} />
                        <Spacer amount={1} />  VAP IoT lab
                    </div>
                    <div className="top-left1" style={{ }}>Home</div>
                    <div className="top-left2" style={{ }}>About</div>
                    <div className="top-left3" style={{ }}>Forum</div>
                    <div className="top-left4" style={{ }}>Contact</div>
                    <div className="top-left5" style={{  }}>FAQs</div>
                    <button className="top-left6" id="btn" style={{  }}>Logout</button>


                    <div className="section">

                        <div className="top-center">
                            <i><hr style={{
                                backgroundColor: '#F89E12',
                                height: '1.5px',
                                width: '75px',
                                // marginLeft:'-70px',
                                // marginTop:'20%'
                            }} /></i>

                            <h2> contact us</h2>
                            <p className="message">Drop us a message and we will get back to you</p>
                        </div>


                        <div id="container" style={{ }}>
                            <div className="rowC" >
                                <div className="columnC1" style={{ backgroundColor: 'white' }}>
                                    {/* <!-- Material form register --> */}
                                    <div className="">
                                        {/* <!--Card content--> */}
                                        <div className="card-body px-lg-5 pt-0">

                                            {/* <!-- Form --> */}
                                            <form className="form1" action="#!" style={{ }}>

                                                <div className="form-row">
                                                    <div className="col">
                                                        {/* <!-- First name --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName" className="labels">First name</label>
                                                            <input type="text" id="input1" className="form-control" placeholder="Ayesha" style={{ }} />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        {/* <!-- Last name --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormLastName" className="labels">Last name</label>
                                                            <input type="email" id="input2" className="form-control" placeholder="Naseer" style={{ }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />

                                                <div className="form-row">
                                                    <div className="col">
                                                        {/* <!-- E-mail --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName" className="labels">E-mail</label>
                                                            <input type="text" id="input3" className="form-control" placeholder="ayeshanaseer@gmail.com" style={{  }} />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        {/* <!-- Phone --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName" className="labels">Phone</label>
                                                            <input type="text" id="input4"  className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" placeholder="+92 - " style={{ }} />
                                                        </div>
                                                    </div>


                                                </div>
                                                <br />

                                                {/* <!-- Subject --> */}
                                                <div className="md-form">
                                                    <label for="materialRegisterFormSubject" className="labels">Subject</label>
                                                    <input type="tel" id="input5" className="form-control" aria-describedby="materialRegisterFormSubjectHelpBlock" placeholder="Title of your query" style={{  }} />
                                                </div>

                                                <br />
                                                <div className="vertical">Information</div>

                                                { /* Message */}
                                                <div className="md-form">
                                                    <label for="materialRegisterFormMessage" className="labels">Message</label>
                                                    <textarea id="areaText" className="form-control" aria-describedby="materialRegisterFormMessageHelpBlock" placeholder="Type your Query here" style={{ }}></textarea>
                                                </div>

                                                <br />
                                                {/* <!-- Submit button --> */}
                                                <button id="btnSubmit" className="" type="submit">Submit</button>

                                            </form>
                                            {/* <!-- Form --> */}
                                        </div>
                                    </div>
                                    {/* <!-- Material form register --> */}
                                </div>
                                <div className="columnC2" style={{  backgroundColor: '#1e1e1e' }}>
                                    <div className="iconss" style={{ color: 'white', fontWeight: 'lighter' }}>

                                        <div className="vertical1">Reach us</div>

                                        <div className="column">
                                            <ion-icon name="mail" className="" id="mailBox" style={{  color: '#F89E12' }}></ion-icon>
                                            <Spacer amount={3} /> VapIotlab@pk.com

                                        </div>

                                        <br />
                                        <div className="column">
                                            <ion-icon name="call" className="" id="phoneCall" style={{ color: '#F89E12', }}></ion-icon>
                                            <Spacer amount={3} />  0337-7874554
                                        </div>

                                        <br />
                                        <div className="column" >
                                            <ion-icon name="location" className="" id="mapLocation" style={{ }}></ion-icon>
                                            <Spacer amount={3} />   Silverback Pvt Ltd. Plot No. 27. 3rd Floor , Sarah Plaza, E-11/3, Islamabad

                                        </div>



                                    </div>








                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="footer" style={{ backgroundColor: 'black', paddingTop: '4px' }}>
                        <div className="Row1" style={{ paddingLeft: '30px', width: '90%' }}>
                            <div className="Column" id="startFooterpart" style={{ }}>
                                2019  VAP IoT Lab , All Rights  Reserved
                            </div>
                            <div className="Column" id="middleFooterpart" style={{ }}>
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

export default ContactUs;