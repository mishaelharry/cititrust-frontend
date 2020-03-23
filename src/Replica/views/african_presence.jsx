import React from 'react';
import '../styles/app.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card, Button, CardTitle, CardText, Row, Col,Popover, PopoverHeader, PopoverBody
  } from 'reactstrap';
class African_Presence extends React.Component{
  login = (e) => {
    e.preventDefault();
    this.props.history.push('/account')

  }
    render(){
        return(
            <>
            <div className="">
            <div className="sub-header">
            <div className="sub-header pt-2">
            <p className="pr-3">Personal Banking</p>
            <p className="pr-3">|</p>
            <p className="pr-3">Commercial Banking</p>
            <p className="pr-3">|</p>
            <p className="pr-3">Corporate and Investment Banking</p>
            <p className="pr-3"> | </p>
            <p className="pr-3">Group</p>
            <div className="ml-auto sub-header_right d-flex justify-content align-items-center">
            <p className="pr-3">Follow us</p>
            <p className="pr-3"><i class="fa fa-youtube-play"></i></p>
            <p className="pr-3"><i class="fa fa-facebook"></i></p>
            <p className="pr-3"><i class="fa fa-twitter"></i></p>
            <p className="pr-3"><i class="fa fa-instagram"></i></p>
            <p className="pr-3"><i class="fa fa-linkedin"></i></p>
            <p className="pr-3"><a href="/account_register">Register</a></p>
            </div>
     
            </div>
            </div>


            <section className="african_presence">
            <h4 className="text-white text-center h3">Countries of Operations</h4>
            <p className="text-danger">Our footprint and success track record in about 10 African countries</p>
            </section>

            <section className="pt-5 pb-5">
                <div className="container">
                <h4 className="text-left">Our African Exploits</h4>
                <p>We are opening up platforms that connects people all across Africa</p>
                <div className="row pl-5">
                <div className="col-md-2">
                <img src={require('../images/souti.gif')} width="50%" />
                <p class="text-left pt-2">South Africa</p>
                </div>
                <div className="col-md-2">
                <img src={require('../images/malawi.gif')} width="50%" />
                <p class="text-left  pt-2">Malawi</p>
                </div>
                <div className="col-md-2">
                <img src={require('../images/cote.gif')} width="50%" />
                <p class="text-left pt-2">Cote'D'voire</p>
                </div>
                <div className="col-md-2">
                <img src={require('../images/gana.gif')} width="50%" />
                <p class="text-left pt-2">Ghana</p>
                </div>
                <div className="col-md-2">
                <img src={require('../images/kenya.gif')} width="50%" />
                <p class="text-left pt-2">Kenya</p>
                </div>
                <div className="col-md-2">
                <img src={require('../images/benin.gif')} width="50%" />
                <p class="text-left pt-2">Benin</p>
                </div>
                <div className="col-md-2">
                <img src={require('../images/nig.gif')} width="50%" />
                <p class="text-left pt-2">Nigeria</p>
                </div>
                <div className="col-md-2">
                <img src={require('../images/uganda.svg')} width="50%" />
                <p class="text-left pt-2">Uganda</p>
                </div>
                <div className="col-md-2">
                <img src={require('../images/bot.gif')} width="50%" />
                <p class="text-left pt-2">Botswana</p>
                </div>
                </div>
                <br />
                <br />
                <div className="text-center">
                <img src={require('../images/citimap.PNG')}  />
                </div>
           
              
        
                 
                   
                </div>
            </section>
           
            
            <section className="sectionSeventh">
            <div className="container">
            <div className="row">
           <div className="col-md-4 pt-5 pb-5">
           <h4 class="text-white">Cititrust Holding Plc.</h4>
           <ul>
             <li>Personal Banking</li>
             <li>Corporate and Incestment Banking</li>
             <li>Group Banking</li>
             <li>Commercial Banking</li>
           </ul>

           </div>
           <div className="col-md-4 pt-5">
           <ul>
             <br />
             <br />
             <li>Security</li>
             <li>Help Center</li>
             <li>Contact</li>
             <li>WhistleBlowing</li>
           </ul>
           
           </div>
           <div className="col-md-4 pt-5">
           <br />
           <br />
           <ul>
             <li>Personal Banking</li>
             <li>Corporate and Incestment Banking</li>
             <li>Group Banking</li>
             <li>Commercial Banking</li>
           </ul>
           </div>
          
           </div>
           
            </div>
            </section>
            
            <footer className="">
            <div className="container">
              <div className="row">
              <div className="col-md-6 ">
              <div className="d-flex">
              <p className="pr-2">Privacy</p>
              <p className="pr-2"> | </p>
              <p className="pr-2"> Term of Use</p>
              <p className="pr-2"> | </p>
              <p className="pr-2"> Sitemap</p>
              <p className="pr-2"> | </p>
              <p className="pr-2"> Extranet </p>
              </div>
              </div>
              <div className="col-md-6 text-center">
              <p>&copy; Cititrust Holding Plc 2020 </p>
              </div>
              </div>
              
              </div>
            </footer>
            

            </div>
            </>
        )
    }
}
export default African_Presence