import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card, Button, CardTitle, CardText, Row, Col,Popover, PopoverHeader, PopoverBody
  } from 'reactstrap';
  import {img} from '../images/card.png'
  const items = [
    {
      id: 1,
      altText: '',
      caption: '',
      image: require('../images/bank1.jpg')
    },
    {
      id: 2,
      altText: '',
      caption: '',
      image: require('../images/bank3.jpg')
    },
    {
      id: 3,
      altText: '',
      caption: '',
      image: require('../images/bann2.jpg')
    }
  ];

  const items3 = [
    {
      id: 1,
      altText: '',
      caption: '',
      image: require('../images/credita.jpg')
    },
    {
      id: 2,
      altText: '',
      caption: '',
      image: require('../images/creditb.jpg')
    },
    {
      id: 3,
      altText: '',
      caption: '',
      image: require('../images/creditc.jpg')
    }
  ];
class Index extends React.Component{
    state = {
        activeIndex: 0,
        animating: false,
        active: 0,
        anime: false
    }
    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex
      })
    }
    
      previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex : nextIndex
      })
    }
    
      goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setState({
            activeIndex: newIndex
      });
    }

    next2 = () => {
      if (this.state.anime) return;
      const nextIndex = this.state.active === items.length - 1 ? 0 : this.state.active + 1;
      this.setState({
          active: nextIndex
    })
  }
  
    previous2 = () => {
      if (this.state.anime) return;
      const nextIndex = this.state.active === 0 ? items.length - 1 : this.state.active - 1;
      this.setState({
          active : nextIndex
    })
  }
  
    goToIndex2 = (newIndex) => {
      if (this.state.anime) return;
      this.setState({
          active: newIndex
    });
  }


    render(){
        const slides = items.map((item) => {
            return (
              <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => this.setState({animating: true})}
                onExited={() => this.setState({animating: false})}
              >
                <img src={require('../images/sure.jpg')} alt={item.altText} />
                <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
            );
          });
          const slideo = items.map((item) => {
            return (
              <CarouselItem
                className="custom-taga"
                tag="div"
                key={item.id}
                onExiting={() => this.setState({anime: true})}
                onExited={() => this.setState({anime: false})}
              >
                <img src={item.image} alt={item.altText} />
                <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
            );
          });
          const atm = items3.map((item) => {
            return (
              <CarouselItem
                className="custom-tagar"
                tag="div"
                key={item.id}
                onExiting={() => this.setState({anime: true})}
                onExited={() => this.setState({anime: false})}
              >
                <img src={item.image} alt="" className="w-100 text-center" />
                <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
            );
          });

        return(
            <>
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
            </div>
     
            </div>


            <header className="bg">
                <div className="heading pt-3">
                <div className="img-logo">
                <img src={require('../images/logo.png')} alt="BANK LOGO" width="40%" />
            </div>
            <div className="ml-auto header_right d-flex justify-content align-items-center head_bank_nav">
            <p className="pr-2">Search</p>
            <p className="pr-5"><i class="fa fa-search"></i></p>
            <p className="pr-2">Contact</p>
            <p className="pr-5"><i class="fa fa-phone"></i></p>
            <p className="pr-2"><a href="account_login">Login</a></p>
            <p className="pr-5"><i class="fa fa-key"></i></p>
            <p className="pr-2"><a href="/account_register">Register</a></p>
            <p className="pr-5"><i class="fa fa-globe"></i></p>
            <hr />
            </div>
                </div>
            <hr  className="mb-0"/>
            <div className="menubar mb-0 mt-0 pt-0 text-white">
                <a href="#" className=" pr-2 pl-2 py-1 homeNav text-center"><i class="home_icon fa fa-home fa-2x"></i></a>
                <a href="/african_presence" className="pr-5 pl-3 text-white">African Presence</a>
                <a href="#" className="pr-5 text-white">Payment & Transfers<i class="pl-2 fa fa-chevron-down"></i></a>
                <a href="#" className="pr-5 text-white">Investors Relations</a>
                <a href="#" className="pr-5 text-white">Our Business</a>
                <a href="/about" className="text-white pr-5">About Us</a>
                <a href="#" className="text-white pr-5 ">Contact<i class="pl-2 fa fa-chevron-down"></i></a>
                <a href="#" className="text-white ">Faq</a>
            </div>
            <div className="">
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: rgb(33, 48, 51);
              marginTop: 0;
            }`
        }
      </style>
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    </div>
            </header>
      <section className="firstSection ">
            <div className="container">
            <Row className="py-2">
      <Col sm="4">
      <Card body inverse style={{ backgroundColor: '#222222', borderColor: '#222222' }}>
        <CardTitle className="text-center">EveryDay Banking</CardTitle>
        
      </Card>
      </Col>
      <Col sm="4">
      <Card body inverse style={{ backgroundColor: '#222222', borderColor: '#222222' }}>
        <CardTitle className="text-center">Payments & Transfers</CardTitle>
        
      </Card>
      </Col>
      <Col sm="4">
      <Card body inverse style={{ backgroundColor: '#222222', borderColor: '#222222' }}>
        <CardTitle className="text-center">Ways To Banks</CardTitle>
      </Card>
      </Col>
    </Row>
      </div> 
      </section>
      


            <section className="thirdSection ">
            <div className="container">
            <h4 className="text-danger">RapidTransfer</h4>
            <p className="text-info">Send the Money Quick and Easy</p>
            <Button color="primary">Read More</Button>{' '}
            </div>
            </section>

            <section className="sectionFourth">
           <div className="row">
           <div className="col-md-6 pt-5 text-center">
           <h4 className="text-white">Help And Security Center</h4>
           <h4 className="text-white">Be safe and secure online</h4>
           <div >

           </div>
           </div>
           <div className="col-md-6 pt-4 pb-4 text-white">
           <p>Advice</p>
           <h4 className="text-white">Save for tomorrow, today</h4>
           <p>How saving can make a difference to you</p>
           <Button color="primary">Find Out More</Button>{' '}
           </div>

           </div>
            
            </section>
            <section className="sectionFifth">
            <div className="container">
            <div className="row">
           <div className="col-md-6 pt-5 pb-5 text-center">
           <div className="container">
      <style>
        {
          `.custom-taga {
              max-width: 100%;
              height: 300px;
              background: white;
              marginTop: 0;
            }`
        }
      </style>
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
        className="text-center"
      >
        <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
        {atm}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    </div>
           </div>
           <div className="col-md-6 pt-5 pb-5 text-center">
           <br />
           <br />
           <h4 className="pt-5">Cards</h4>
           <h4>Why carry money? Go plastic, go cashless</h4>
           <Button color="primary">Find Out More</Button>{' '}
           </div>

           </div>
            
            </div>
 
            
            </section>
            <section>
              <div className="thirdSectiona">

              </div>

            </section>

          
            <section className="sectionSix">
            <div className="container">
            <div className="row">
           <div className="col-md-4 pt-5 pb-5">
           <h4>Latest News</h4>
           <p>19 March 2020</p>
           <h4>Cititrust announces changes on the board of ETI</h4>   
           <br />
           <Button color="primary" className="mt-1">Download the App</Button>{' '}
           </div>
           <div className="col-md-4 pt-5">
           <br /><br/>
           <p>19 March 2020</p>
           <h4>COVID-19: Our priority is your well being Cititrust</h4>
           
           <Button color="primary" className="mt-4">Download the App</Button>{' '}
           </div>
           <div className="col-md-4 pt-5">
           <br />
           <br />
           <p>20 March 2020</p>
           <h4>Cititrust Group announces 2020 Edition of Fintech Challenge</h4>
           <br />
           <Button color="primary" className="mt-1">Download the App</Button>{' '}
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
            <hr  className="mt-0 pt-0  mb-0 pb-0" />

      
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
        
            
        

            </>
        )
    }
}
export default Index;