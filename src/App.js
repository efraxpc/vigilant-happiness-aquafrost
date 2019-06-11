import React, {Component} from 'react';
import './App.css';
import './Fonts.css';
import SmallCarousel from "./Components/SmallCarousel";
import morado from './morado.png'
import ueImage from './ueImage.png'
import carouselMiniMobileImg1 from './carousel_mini_mobile_img1.png'
import pulpinImage from './pulpin.png'
import razonCalidadImg from './razon_calidad_img.png'
import razonMedioambienteImg from './razon_medioambiente_img.png'
import razonPescadoYSaludImg from './razon_pescado_y_salud_img.png'
import aquafrostLogoCompletoImg from './aquafrost_logo_completo.png'
import ReactCountryFlag from "react-country-flag";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faArrowDown, faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons'

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <div className={'contenedor__menu'}>
                        <div className={'contenedor__menu_left'}>
                            <span className={'menu__left_bars'}> <FontAwesomeIcon icon={faBars}/></span>
                            <span><img src={pulpinImage} alt="Logo pulpo" className={'menu__left_logo'}/></span>
                        </div>
                        <div className={'contenedor__menu_rigth'}>
                            <div className={'contenedor__flags_select'}>
                                <ReactCountryFlag
                                    styleProps={{
                                        width: '30px',
                                        height: '35px'
                                    }}
                                    code="pe"
                                    svg
                                />
                                <a href="#" className={'enlace'} onClick={(e)=>e.preventDefault}>
                                    <span className={'triangulo__flags_select'}>
                                         <div className="triangulo_2"></div>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor__main_header" style={{backgroundImage: `url(${morado})`}}>
                        <div className={'contenedor__main_header_content'}>
                            <div className={'main__header_wrapper_title'}>
                                <p>Aquafrost, Exportacion de productos marinos</p>
                            </div>
                            <div className={'main__header_wrapper_subtittle'}>
                                <p className={'exportamos__parrafo'}>Exportamos a más de 15 países</p>
                                <img src={ueImage} alt="imagen UE"/>
                                <div className={'main__header_wrapper_boton'}>
                                    <div className="rectangulo__boton rectangulo__boton_main_header">
                                        <a href="#" className="enlace" onClick={(e)=>e.preventDefault}>
                                            <p>Nuestros Servicios <FontAwesomeIcon icon={faChevronRight} className={'arrow_rigth_chevron_boton_main_header'}/></p>
                                        </a>
                                    </div>
                                </div>
                                <div className="main__header_wrapper_circle">
                                    <div className="circulo_boton">
                                        <a href="#" className={'enlace'}>
                                            <FontAwesomeIcon icon={faArrowDown} className={'arrow_down__icon'}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className={'contenedor__bienvenida'}>
                    <div className={'contenedor__img_pulpo_bienvenida'}>
                        <img src={pulpinImage} alt="Logo pulpo" className={'img_pulpo_bienvenida__section'}/>
                    </div>
                    <div className={"contenedor__bienvenido_parrafo"}>
                        <p className={'bienvenido__parrafo'}>Bienvenido a Aquafrost</p>
                    </div>
                    <div className={"contenedor__texto_bienvenida_parrafo"}>
                        <p className={'text_bienvenida__parrafo'}>
                            Nuestros productos han sido obtenidos bajo condiciones de alta <br/> competitividad, tecnología de
                            punta, profesionalismo en la gestión <br/> y un proceso sistemático de <br/> mejoramiento continuo.
                        </p>
                    </div>
                    <div className={'main__header_wrapper_boton main__header_wrapper_mobon_bienvenida'}>
                        <div className="rectangulo__boton bienvenida__boton">
                            <a href="#" className={'enlace'}>
                                <p>Conócenos <FontAwesomeIcon icon={faChevronRight} className={'arrow_rigth_chevron_boton_bienvenida'}/></p>
                            </a>
                        </div>
                    </div>
                </section>
                <section className={'contendor__garantia_de_calidad'}>
                    <p className={'garantia_de_calidad_slider__producto_de_calidad_parrafo'}>Garantía de calidad</p>
                    <div className="contenedor_garantia_de_calidad_slider">
                        <SmallCarousel/>
                    </div>
                    <p className={'garantia_de_calidad_slider__producto_parrafo'}>Producto Uno</p>
                    <div className={'contenedor__boton_garantia_de_calidad'}>
                        <div className="rectangulo__boton garantia_de_calidad__boton ">
                            <a href="#" className={'enlace'} onClick={(e)=>e.preventDefault}>
                                <p>Ver todos los productos <FontAwesomeIcon icon={faChevronRight} className={'arrow_rigth_chevron_boton_garantia_de_calidad'}/></p>
                            </a>
                        </div>
                    </div>
                </section>
                <section className={'contenedor__aquafrost_en_el_mundo'}>
                    <div className="contenedor_aquafrost_en_el_mundo__parrafo">
                        <p className={'aquafrost_en_el_mundo__parrafo'}>Aquafrost en el mundo</p>
                    </div>
                    <div className="contenedor_aquafrost_en_el_mundo_descripcion__parrafo">
                        <p className={'aquafrost_en_el_mundo_descripcion__parrafo'}>Nuestros productos han sido
                            <br/> obtendios bajo condiciones de alta competitividad, tecnología de punta, profesionalismo en
                            la gestión y un <br/> proceso sistemático de mejoramiento  <br/> continuo.</p>
                    </div>
                    <div className="contenedor_aquafros_en_el_mundo__banderas">
                        <span className={'contenedor_auuafrost_en_el_mundo__flag'}>
                             <ReactCountryFlag
                                 styleProps={{
                                     width: '62px',
                                     height: '32px'
                                 }}
                                 code="es"
                                 svg
                             />
                        </span>
                        <span className={'contenedor_auuafrost_en_el_mundo__flag'}>
                          <ReactCountryFlag
                              styleProps={{
                                  width: '62px',
                                  height: '32px'
                              }}
                              code="tr"
                              svg
                          />
                        </span>
                        <span className={'contenedor_auuafrost_en_el_mundo__flag'}>
                          <ReactCountryFlag
                              styleProps={{
                                  width: '62px',
                                  height: '32px'
                              }}
                              code="br"
                              svg
                          />
                        </span>
                        <span className={'contenedor_auuafrost_en_el_mundo__flag'}>
                           <ReactCountryFlag
                               styleProps={{
                                   width: '62px',
                                   height: '32px'
                               }}
                               code="us"
                               svg
                           />
                        </span>
                    </div>
                </section>
                <section className="contenedor__porque_elegirnos">
                    <p className={'porque_elegirnos__parrafo'}>¿Por qué elegirnos?</p>
                    <div className="porque_elegirnos_wrapper">
                        <img src={razonCalidadImg} alt="razonCalidadImg"/>
                        <p className={'porque_elegirnos_wrapper_title__parrafo'}>Calidad</p>
                        <p className={'text_porque_elegirnos_descripcion_wrapper__parrafo'}>Priorizamos la calidad de <br/> los productos que producimos tratándolos de la mejor forma <br/> posible
                            para que conserven <br/> todas sus propiedades.</p>
                    </div>
                    <div className="porque_elegirnos_wrapper">
                        <img src={razonMedioambienteImg} alt="razonMedioambienteImg"/>
                        <p className={'porque_elegirnos_wrapper_title__parrafo'}>Medioambiente</p>
                        <p className={'text_porque_elegirnos_descripcion_wrapper__parrafo'}>Sentimos un profundo <br/> respeto hacia el medio ambiente, <br/> por ello, implantamos prácticas <br/> ambientales y santiarias que <br/> aseguran su protección.</p>
                    </div>
                    <div className="porque_elegirnos_wrapper">
                        <img src={razonPescadoYSaludImg} alt="razonPescadoYSaludImg"/>
                        <p className={'porque_elegirnos_wrapper_title__parrafo'}>Pescado y salud</p>
                        <p className={'text_porque_elegirnos_descripcion_wrapper__parrafo text__porque_elegirnos_descripcion__parrafo'}>En Oversea nos preocupa su salud.<br/> El pescado es un componente que <br/> debe estar presenteen nuestra dieta, <br/> ya que nos aporta proteínas de gran <br/> calidad, vitaminas y minerales.</p>
                    </div>
                    <div className={'contenedor__boton_conoce_un_poco_mas'}>
                        <div className="rectangulo__boton conoce_un_poco_mas__boton ">
                            <a href="#" className={'enlace'} onClick={(e)=>e.preventDefault}>
                                <p>Conoce un poco más <FontAwesomeIcon icon={faChevronRight} className={'arrow_rigth_chevron_boton_aquafrost_todos_los_derechos_reservados'}/></p>
                            </a>
                        </div>
                    </div>
                </section>
                <footer className={'contenedor_aquafrost_todos_los_derechos_reservados'}>
                    <img src={aquafrostLogoCompletoImg} alt="aquafrostLogoCompletoImg" className={'img_aquafrost_logo_completo'}/>
                    <p>Todos los derechos reservados</p>
                    <div className="contenedor_textos_enlaces_footer">
                        <div className="contenedor_sub_textos_enlaces_footer">
                            <p>Servicios</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'}/>
                        </div>
                        <div className="contenedor_sub_textos_enlaces_footer">
                            <p>Empresa</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'}/>
                        </div>
                        <div className="contenedor_sub_textos_enlaces_footer">
                            <p>Mercados</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'}/>
                        </div>
                        <div className="contenedor_sub_textos_enlaces_footer">
                            <p>Blog</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'}/>
                        </div>
                        <div className="contenedor_sub_textos_enlaces_footer">
                            <p>Contacto</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'}/>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default App;
