import React from 'react';
import '../styles/app.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card, Button, CardTitle, CardText, Row, Col,Popover, PopoverHeader, PopoverBody, CardBody, CardFooter,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
  } from 'reactstrap';
import {Link } from 'react-router-dom'
class Dashboard extends React.Component{
  home = (e)=>{
    e.preventDefault();
    this.props.history.push('/')

  }
    render(){
        return(
            <>
            <div className="">
            <div className="">
            <div className="sub-header pt-2">
            <p className="pr-3 pl-0">Personal Banking</p>
            <p className="pr-3">|</p>
            <p className="pr-3">Commercial Banking</p>
            <p className="pr-3">|</p>
            <p className="pr-3">Corporate and Investment Banking</p>
            <div className="ml-auto">
            <p className="pr-5"><i className="pr-1 fa fa-user-circle"></i>My Account 
            <i className="pl-1 fa fa-chevron-down"></i>
            
            </p>
            
          
            </div>
     
            </div>
            <div className="container">
            <div className="account-nav pb-5 mb-0">
            <div className="d-flex justify-content-start align-items-center">
            <p className="mr-auto pl-4 pt-0 mt-0 font-weight-bold"><img src={require('../images/logo.png')} alt="BANK LOGO" width="28%" /></p>
            <p className="pt-3 pb-3 font-weight-bold pr-4">ALL CONTRACTS</p>
            <p className="pt-3 pb-3 font-weight-bold pr-4">PROTECTIONS AND SAVINGS</p>
            <p className="pt-3 pb-3 font-weight-bold pr-4">HEALTH </p>
            <p className="pt-3 pb-3 font-weight-bold pr-4">INVESTMENT</p>
            <p className="pt-3 pb-3 font-weight-bold pr-3">PENSIONS</p>
            </div>
            </div>
            <div className="account-nav mb-0">
            <Row>
      <Col md="12">
        <Card body inverse style={{ backgroundColor: ' #fff', borderColor: ' #fff' }}>
        <div className="d-flex justify-content-between align-items-center">
        <CardTitle className="text-info font-weight-bold">Hello Tomiwa</CardTitle>
          <CardTitle className="text-info font-weight-bold"><i className="fa fa-home fa-2x" onClick={this.home}></i></CardTitle>
        </div>
         
          <Row>
              <Col md="3">
              <Card body inverse style={{ backgroundColor: ' #222222', borderColor: ' #222222' }}>  
              <CardTitle  className="h5 pt-4 text-center">Insurance Policy?</CardTitle>
        <p className="text-center pt-3"><i className="fa fa-plus-circle pr-1"></i>Add Existing Account</p>
      </Card>
              
              </Col>
              <Col md="3">
              <Card body inverse style={{ backgroundColor: ' #da251c', borderColor: ' #da251c' }}>
             
        <CardTitle  className="p pt-4 h5 text-center">No Health Plan?</CardTitle>
        
        <p className="text-center pt-3"><i className="fa fa-plus-circle pr-1"></i>Add Existing Account</p>
      </Card>
              
              </Col>

              <Col md="3">
              <Card body inverse style={{ backgroundColor: '#017cc2', borderColor: '#017cc2' }}>
        <CardTitle  className="p pt-4 h5 text-center"> Investment Account?</CardTitle> 
       
        <p className="text-center pt-3"><i className="fa fa-plus-circle pr-1"></i>Add Existing Account</p>
      </Card>
              
              </Col>
              <Col md="3">
              <Card body inverse style={{ backgroundColor: '#e67817', borderColor: '#e67817' }}>
              <CardTitle className="p pt-4 h5 text-center">No FPA Account?</CardTitle>
      
        <p className="text-center pt-3"><i className="fa fa-plus-circle pr-1"></i>Add Existing Account</p>
      </Card>
              
              </Col>
          </Row>
        
          
        
        </Card>
      </Col>
     
    </Row>
    <Row>
      <Col md="12">
        <Card body>
          <CardTitle className="text-info font-weight-bold">RECENT ONLINE TRANSACTIONS</CardTitle>
          <div className="card bg-light">
          <CardText className="text-info py-4 pl-4">You have no recent online transactions.</CardText>
          </div>
        
          <CardTitle className="pt-4 text-info font-weight-bold">CONTRIBUTIONS AND ADDITIONAL PREMIUM POLICIES</CardTitle>
          <div className="card bg-light">
          <CardText className="text-info py-4 pl-4">No policy available.</CardText>
          </div>
          <CardTitle className="pt-4 text-info font-weight-bold">RENEWALS DUE</CardTitle>
          <div className="card bg-light">
          <CardText className="text-info py-4 pl-4">No policy due for renewal.</CardText>
          </div>
        </Card>
      </Col>
    </Row>
            </div>

           
            
            </div>
          
            {/* <section className="section-dash pt-5 pb-5">
           <div className="row">
           <div className="col-md-6 pt-5 pb-5 text-center">
           <img src={require('../images/card.png')} />
           </div>
           <div className="col-md-6 pt-5 pb-5 ">
           <p className="text-white">Cards</p>
           <p className="text-white">Why carry money? Go plastic, go cashless</p>
           <Button color="primary">Find Out More</Button>{' '}
           </div>

           </div>
            
            </section> */}

         
          
            {/* <section className="sectionSix">
            <div className="container">
            <div className="row">
           <div className="col-md-4 pt-5 pb-5">
           <p>Latest News</p>
           <p>19 March 2020</p>
           <p>Ecobank announces changes on the board of ETI</p> 
           <br />  
           <Button color="primary">Download the App</Button>{' '}
           </div>
           <div className="col-md-4 pt-5">
           <p>19 March 2020</p>
           <p>COVID-19: OUR PRIORITY IS YOUR WELL BEING AT ECOBANK</p>
           <Button color="primary">Download the App</Button>{' '}
           </div>
           <div className="col-md-4 pt-5">
           <p>20 March 2020</p>
           <p>Ecobank Group announces 2020 Edition of Fintech Challenge</p>
           <br />
           <Button color="primary">Download the App</Button>{' '}
           </div>

           </div>
            </div>
           
            
            </section>
            <section className="sectionSeventh">
            <div className="container">
            <div className="row">
           <div className="col-md-4 pt-5 pb-5">
           <p class="text-white">Ecobank Banking</p>
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
           <p className="text-left text-white">Ecobank Nigeria</p>
           <ul>
             <li>Personal Banking</li>
             <li>Corporate and Incestment Banking</li>
             <li>Group Banking</li>
             <li>Commercial Banking</li>
           </ul>
           </div>
          
           </div>
          
            </div>
            </section> */}
            <hr  className="mt-0 pt-0  mb-0 pb-0" />

{/*       
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
              <p>&copy; CitiTrustBank 2020 </p>
              </div>
              </div>
              
              </div>
            </footer> */}
            </div>
            
          
            

            </div>
            </>
        )
    }
}
export default Dashboard