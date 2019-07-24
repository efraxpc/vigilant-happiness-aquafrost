import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import first_pic from '../../assets/1.jpeg';
import second_pic from '../../assets/2.jpeg';
import third_pic from '../../assets/3.jpeg';

import './carousel.css';


class DemoCarousel extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        //this.myRef.current.itemsRef[0].style.paddingLeft = '50px'
        this.myRef.current.itemsRef[1].style.paddingLeft = '50px'
        console.log(  this.myRef.current  )
    }

    render() {
        return (
            <Carousel
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                ref={this.myRef}>
                <div>
                    <img src={first_pic} />
                </div>
                <div>
                    <img src={second_pic} />
                </div>
                <div>
                    <img src={third_pic} />
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;