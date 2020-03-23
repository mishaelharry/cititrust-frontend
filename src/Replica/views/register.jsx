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
class Register extends React.Component{
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
            <p className="pr-3"><a href="/account_login">Login</a></p>
            </div>
     
            </div>
            </div>
            <section>
            <div className="row">
            <div className="col-md-5 login_image">
            </div>
            <div className="col-md-7  pt-3 pb-5">
            <div className="container">
            <h4 className="text-center text-info">Create An Account</h4>
            <hr  className="text-success" />
            <br />
           
            <p className="text-left"> We're so glad you're ready to join. This should only take a couple minutes. Let's start by creating your account login</p>
            <p className="font-weight-bold">Personal Info</p>
            
            <div className="row">
            <div className="col-md-6">
            <p className="font-weight-bold">Your Account</p>
            <form className="">
            <div className="form-group">
                <label>Email Address (this will also be your login)</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Create Password</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Confirm Password</label>
                <input type="text" name="username" className="form-control" />
                </div>
               
                <div className="form-group">
                <label>Email Address (this will also be your login)</label>
                <input type="text" name="username" className="form-control" />
                </div>
            
            </form>
            
            </div>
            <div className="col-md-6">
            <p className="font-weight-bold">Your Information</p>
            <form className="">
            <div className="form-group">
                <label>Firstname</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Lastname</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Phone Number</label>
                <input type="text" name="username" className="form-control" />
                </div>
               
                <div className="form-group">
                <label>Are you already our customer? </label>
                <select type="select" name="username" className="form-control">
                <option>YES</option>
                <option>NO</option>                
                </select>

                </div>
            
            </form>
            
            </div>
            </div>
               <div className="d-flex justify-content-end align-items-center">
               <button className="btn btn-md btn-info">Submit</button>
               </div>
               
               
    

     
            
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
export default Register