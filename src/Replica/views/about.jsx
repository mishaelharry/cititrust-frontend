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
class About extends React.Component{
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


            <section className="about">
            <h4 className=" text-center h3">About Us</h4>
        
            </section>

            <section className="pt-5 pb-5">
                <div className="container">
                <div className="row">
                <div className="col-md-6 ">
                <h4 className="text-info">OUR HISTORY</h4>
                <p className="">CITITRUST HOLDINGS PLC's experience in Africa dates back to 2007 with the establishment of CITITRUST FINANCIAL SERVICES LIMITED, a Financial Services Holding Company based in Lagos, Nigeria. In 2012, The Group diversified into Non - Financial Services Business in Nigeria commencing in the Energy Sector and later on Telecoms, Healthcare, Real Estate and of recently Engineering, Procurement and Construction (EPC). In 2017 and after 10Years of Operations in Key Nigeria Business Sector, The Group Launched its African Expansion Plan and the Group Structure with establishment of CITITRUST DEVELOPMENT PARTNERS Plc in 2018, which later changed to CITITRUST HOLDINGS PLC in 2019, to reflect a Holdco Structure. Today CITITRUST HOLDINGS PLC, a Non – Operating Investment Holding Company together with its subsidiaries (“the Group”) has over about 50 Subsidiaries across Africa</p>
                </div>
                <div className="col-md-6">
                <img src={require('../images/rit.jpeg')} className="w-100" />
                
                </div>
                
                </div>
                </div>
            </section>
           <section className="sectionFourth text-center pt-5 pb-5">
          <i className="fa fa-eye fa-4x text-center"></i>
          <h4 className="text-white"> Our Vision</h4>
          <p> To be a diversified growth oriented investment vehicle for wealth creation</p>

           </section>
           <section className="text-center pt-5 pb-5">
          <i className="fa fa-shield fa-4x text-center"></i>
          <h4 className="font-weight-bold"> Our Mission</h4>
          <p> Our mission is to aggressively grow value by creatively pursuing investment opportunities that generates superior return. We constantly aim to exceed our stakeholder expectations, whilst continuously celebrate individuals and teamwork. Retaining our workforce and building a competitive edge through sustainable innovation is essential for us</p>

           </section>
           <section className="sectionFourth text-center pt-5 pb-5">
          <i className="fa fa-shield fa-4x text-center"></i>
          <h4 className="text-white font-weight-bold"> Who We Are</h4>
          <p className="text-left container">CITITRUST HOLDINGS PLC vision is one of the leading Investment holding company in Africa. This milestone has been achieved by successfully increasing our markets, businesses, customers and shareholders’ equity from time to time. We believe our workforce will play a pivotal role in placing the company at a high standard Our services include Private, Business, Corporate and Mortgage Banking, Assets management, Stock Broking, and Investment Banking (Financial Advisory; Debt & Equity Capital Markets and Project & Structured Finance), Bureau De change, Pension Fund Administrator and Insurance Services. We also hold diversified Investment in the Energy, Healthcare, Telecommunications and Engineering and Construction. All our services are carried out through our various subsidiaries across Eight (8) African Countries namely Nigeria, Ghana, South Africa, Kenya, Botswana, Cote D’Ivoire, and Benin Republic. CITITRUST HOLDINGS PLC is well positioned to be high performing investment holding company driven to create value for funders, shareholders and business partners. With a solid track record shaped over a decade, we actively seek out investment partnerships with high quality privately and publicly owned businesses across a range of strategic sectors.</p>

           </section>
           <section className="text-center pt-5 pb-5">
          <i className="fa fa-shield fa-4x text-center"></i>
          <h4 className="font-weight-bold"> Our Strategy</h4>
          <p className="text-left container">We believe that Africa, will continue to provide excellent investment opportunities going forward. CITITRUST has a broad and flexible investment mandate, and we have deployed the majority of our capital in sectors where we believe we can leverage our deep experience and long-standing relationships. We seek opportunities to build and invest in wholly, majority stakes or significant minority stakes in leading African companies. We are value-added investors who are prepared to work closely with management teams and play an active role in assisting our portfolio companies to reach their full potential. Although we generally pursue investments in the Financial Services, Energy, Telecommunications, Engineering, Procurement and Construction (EPC) and Healthcare Sectors, we will opportunistically pursue investments in other sectors as well. We are also prepared to back proven management teams to buy out businesses or to significantly expand their companies via a “buy and build” strategy. While we always drive our subsidiaries to “play the game better”, we often aim to “change the game” via helping our companies with acquisitions, new product development, expanded business strategies, and accessing new sources of capital. In all we took active and controlling role in subsidiaries Finance, Legal, Compliance, Risk Management, and Human Resources</p>

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
export default About