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
class AccountLogin extends React.Component{
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
            <section>
            <div className="row">
            <div className="col-md-7 login_image">
            </div>
            <div className="col-md-5  pt-3 pb-5">
            <h4 className="text-center text-info">Account Login</h4>
            <p className="text-center"> Lets login you in to your account</p>

            <hr  className="text-success" />
            <br />
            <br />
            <form className="col-md-10 offset-1">
                <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <button className="btn btn-block btn-info" onClick={this.login}>SIGN IN</button>
                <p className="pt-4 pb-4 text-danger font-weight-bold text-center">I AM NOT REGISTERED!</p>

            </form>
            <div className="text-center">
            <img src={require('../images/card.png')} />
            </div>
           

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
export default AccountLogin