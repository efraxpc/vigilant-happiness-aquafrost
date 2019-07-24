import React, {Component} from 'react';
import './styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

const imgUrls = [
    "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
    "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
    "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
    "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
    "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

class SmallCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide(e) {
        e.preventDefault()
        const lastIndex = imgUrls.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide(e) {
        e.preventDefault()
        const lastIndex = imgUrls.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        let self = this
        return (
            <div className="carousel">
                <div className={'contenedor_left_arrow_slider_mini'}>
                    <Arrow direction="left"
                           clickFunction={
                               self.previousSlide
                           }
                           glyph="&#9664;"
                    />
                </div>
                <ImageSlide url={imgUrls[this.state.currentImageIndex]}/>
                <div className={'contenedor_rigth_arrow_slider_mini'}>
                    <Arrow direction="right"
                           clickFunction={
                               self.nextSlide
                           } glyph="&#9654;"/>
                </div>
            </div>
        );
    }
}

const Arrow = ({direction, clickFunction, glyph}) => (

    <div>
        <div className={`circulo_boton circulo_boton__carousel_mini_mobile slide-arrow ${direction}`}>
            <a href="#" className={'enlace'}
               onClick={clickFunction}>
                <FontAwesomeIcon
                    icon={direction === 'left' ? faArrowLeft:faArrowRight}
                    className={direction === 'left' ? 'arrow_left__icon_mobile' : 'arrow__rigth_icon_mobile'}/>
            </a>
        </div>
    </div>
);

const ImageSlide = ({url}) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className="image-slide" style={styles}></div>
    );
}

export default SmallCarousel;
