import React, { Component } from 'react';
import './App.css';
import DemoCarousel from "./Components/Carousel";

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="menu">
                <div className="contenedor" id="contenedor-menu">
                    <p className="logo">AQUAFROST</p>
                    <nav className={'menu__center_nav'}>
                        <ul className={'menu__ul_center_nav'}>
                            <li><a href="#productos">Productos</a></li>
                            <li><a href="#empresa">Empresa</a></li>
                            <li><a href="#mercados">Mercados</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className={'menu__ul_rigth_nav'}>
                            <li><div className={'rectangulo'}></div></li>
                            <li>flag</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {<DemoCarousel/>}
        </React.Fragment>
    );
  }
}

export default App;
