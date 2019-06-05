import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import first_pic from '../../assets/1.jpeg';
import second_pic from '../../assets/2.jpeg';
import third_pic from '../../assets/3.jpeg';
import './carousel.css';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={false} showStatus={false} showThumbs={false}>
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