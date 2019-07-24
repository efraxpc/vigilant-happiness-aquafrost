import React, { Component } from 'react';
import './App.css';
import './Fonts.css';
import './styles/1280.css';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from "react-slick";
import { faBars, faArrowDown, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}
class App extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleArrow />,
            prevArrow: <SampleArrow />
        };
        const settings_garantia_de_calidad = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        return (
            <React.Fragment>
                <header>
                    <div className={'contenedor__menu'}>
                        <div className={'contenedor__menu_left'}>
                            <span className={'menu__left_bars'}> <FontAwesomeIcon icon={faBars} /></span>
                            <span><img src={pulpinImage} alt="Logo pulpo" className={'menu__left_logo'} /></span>
                        </div>
                        <div className={'contenedor_header_logo_menu_grande'}>
                            <div>
                                <img src={aquafrostLogoCompletoImg} alt="Logo completo" className={''} />
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <span>Productos</span>
                                        <span className={'triangulo__flags_select'}>
                                            <div className="triangulo_2 triangulo_header_menu"></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span>Empresa</span>
                                        <span className={'triangulo__flags_select'}>
                                            <div className="triangulo_2 triangulo_header_menu"></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span>Mercados</span>
                                    </li>
                                    <li>
                                        <span>Blog</span>
                                    </li>
                                    <li>
                                        <span>Contacto</span>
                                    </li>
                                </ul>
                            </nav>
                            <div className="rectangulo__boton rectangulo__boton_main_header_grande">
                                <div>
                                    <span>
                                        <i class="fa fa-whatsapp whatsapp_icon_header"></i>
                                    </span>
                                    <p className={'tel_peru_code_parrafo tel_numero_parrafo'}>+51</p>
                                    <p className={'tel_numero_parrafo'}>949</p>
                                    <p className={'tel_numero_parrafo'}>543</p>
                                    <p className={'tel_numero_parrafo'}>092</p>
                                </div>

                            </div>
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
                                <a href="#" className={'enlace'} onClick={(e) => e.preventDefault}>
                                    <span className={'triangulo__flags_select'}>
                                        <div className="triangulo_2 triangulo_2_flag_selector"></div>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor__main_header" style={{ backgroundImage: `url(${morado})` }}>
                        <div className={'contenedor__main_header_content'}>
                            <div className={'main__header_wrapper_title'}>
                                <p>Aquafrost Perú, Exportacion <br /> de productos marinos</p>
                            </div>
                            <div className={'main__header_wrapper_subtittle'}>
                                <p className={'exportamos__parrafo'}>Exportamos a más de 15 países</p>
                                <img src={ueImage} alt="imagen UE" />
                                <div className={'main__header_wrapper_boton'}>
                                    <div className="rectangulo__boton rectangulo__boton_main_header">
                                        <a href="#" className="enlace" onClick={(e) => e.preventDefault}>
                                            <p>Nuestros Servicios <FontAwesomeIcon icon={faChevronRight} className={'arrow_rigth_chevron_boton_main_header'} /></p>
                                        </a>
                                    </div>
                                </div>
                                <div className="main__header_wrapper_circle">
                                    <div className="circulo_boton">
                                        <a href="#" className={'enlace'}>
                                            <FontAwesomeIcon icon={faArrowDown} className={'arrow_down__icon'} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={'contenedor__main_header_grande'}>
                        <div style={{
                            // paddingBottom: 126
                        }}>
                            <Slider {...settings}>
                                <div className={'container_slider'}>
                                    <div style={{ backgroundColor: 'purple', width: '100%', height: '50hv', margin: '0 auto' }}>
                                        <div className={'contenedor__main_header_content'} style={{ backgroundImage: `url(${morado})` }}>
                                            <div className={'main__header_wrapper_title'}>
                                                <p>Aquafrost Perú, <br /> Exportacion de <br /> productos marinos</p>
                                            </div>
                                            <div className={'main__header_wrapper_subtittle'}>
                                                <diV>
                                                    <p className={'exportamos__parrafo'}>Exportamos a más de 15 países</p>
                                                    <div className={'main__header_wrapper_boton'}>
                                                        <div className="rectangulo__boton rectangulo__boton_main_header">
                                                            <a href="#" className="enlace" onClick={(e) => e.preventDefault}>
                                                                <p>Nuestros Servicios <FontAwesomeIcon icon={faChevronRight}
                                                                    className={'arrow_rigth_chevron_boton_main_header'} /></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="main__header_wrapper_circle"></div>
                                                </diV>
                                                <div className={'contenedor_sello_header'}>
                                                    <p> Certificado por:</p>
                                                    <img src={ueImage} alt="imagen UE" />
                                                    <div className="circulo_boton">
                                                        <a href="#" className={'enlace'}>
                                                            <FontAwesomeIcon icon={faArrowDown} className={'arrow_down__icon'} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <div style={{ backgroundColor: 'purple', width: '100%', height: 600, margin: '0 auto' }}>
                                        <img src={morado} alt="morado" />
                                    </div>
                                </div>
                                <div>
                                    <div style={{ backgroundColor: 'purple', width: '100%', height: 600, margin: '0 auto' }}>
                                        <img src={morado} alt="morado" />
                                    </div>
                                </div>
                            </Slider>
                            <div className="circulo_boton_header_grande">
                                <a href="#" className={'enlace'}>
                                    <FontAwesomeIcon icon={faArrowDown} className={'arrow_down__icon'} />
                                </a>
                            </div>
                        </div>
                    </section>
                </header>
                <section className={'contenedor__bienvenida'}>

                    <div className={'contenedor__img_pulpo_bienvenida'}>
                        <img src={pulpinImage} alt="Logo pulpo" className={'img_pulpo_bienvenida__section'} />
                    </div>
                    <div className={"contenedor__bienvenido_parrafo"}>
                        <p className={'bienvenido__parrafo'}>Bienvenido a Aquafrost Peru</p>
                    </div>
                    <div className={"contenedor__texto_bienvenida_parrafo"}>
                        <p className={'text_bienvenida__parrafo'}>
                            Nuestros productos han sido <br /> obtenidos bajo condiciones de alta <br /> competitividad, tecnología de
                            punta, profesionalismo en la gestión <br /> y un proceso sistemático de <br /> mejoramiento continuo.
                        </p>
                        <p className={'text_bienvenida__parrafo_pantalla_grande'}>
                            Nuestros productos han sido obtenidos bajo condiciones de alta <br /> competitividad, tecnología de
                            punta, profesionalismo en la gestión y un <br /> proceso sistemático de mejoramiento continuo.
                        </p>
                    </div>
                    <div className={'main__header_wrapper_boton main__header_wrapper_mobon_bienvenida'}>
                        <div className="rectangulo__boton bienvenida__boton">
                            <a href="#" className={'enlace'}>
                                <p>Conócenos <FontAwesomeIcon icon={faChevronRight} className={'arrow_rigth_chevron_boton_bienvenida'} /></p>
                            </a>
                        </div>
                    </div>
                </section>
                <section className={'contendor__garantia_de_calidad'}>
                    <p className={'garantia_de_calidad_slider__producto_de_calidad_parrafo'}>Garantía de calidad</p>
                    <div className="contenedor_garantia_de_calidad_slider">
                        <SmallCarousel />
                    </div>
                    <p className={'garantia_de_calidad_slider__producto_parrafo'}>Producto Uno</p>
                    <div className={'contenedor__boton_garantia_de_calidad'}>
                        <div className="rectangulo__boton garantia_de_calidad__boton ">
                            <a href="#" className={'enlace'} onClick={(e) => e.preventDefault}>
                                <p>Ver todos los productos <FontAwesomeIcon icon={faChevronRight} className={'arrow_rigth_chevron_boton_garantia_de_calidad'} /></p>
                            </a>
                        </div>
                    </div>
                    {/* slider garantia de calidad  */}
                    <div className={'contenedor_slider_garantia_de_calidad_pantalla_grande'}>
                        <Slider {...settings_garantia_de_calidad}>
                            <div>
                                <img src={'https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781'} />
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                        </Slider>
                    </div>
                </section>
                <section className={'contenedor__aquafrost_en_el_mundo'}>
                    <div className="contenedor_aquafrost_en_el_mundo__parrafo">
                        <p className={'aquafrost_en_el_mundo__parrafo'}>Aquafrost Perú <br /> en el mundo</p>
                    </div>
                    <div className="contenedor_aquafrost_en_el_mundo_descripcion__parrafo">
                        <p className={'aquafrost_en_el_mundo_descripcion__parrafo'}>Nuestros productos han sido
                            <br /> obtendios bajo condiciones de alta competitividad, tecnología de punta, profesionalismo en
                            la gestión y un <br /> proceso sistemático de mejoramiento  <br /> continuo.</p>
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
                        <img src={razonCalidadImg} alt="razonCalidadImg" className={'razon_calidad_img'} />
                        <p className={'porque_elegirnos_wrapper_title__parrafo'}>Calidad</p>
                        <p className={'text_porque_elegirnos_descripcion_wrapper__parrafo'}>Priorizamos la calidad de <br /> los productos que producimos tratándolos de la mejor forma <br /> posible
                            para que conserven <br /> todas sus propiedades.</p>
                    </div>
                    <div className="porque_elegirnos_wrapper">
                        <img src={razonMedioambienteImg} alt="razonMedioambienteImg" className={'razon_medioambiente_img'} />
                        <p className={'porque_elegirnos_wrapper_title__parrafo medioambiente_parrafo'}>Medioambiente</p>
                        <p className={'text_porque_elegirnos_descripcion_wrapper__parrafo sentimos_un_profunto_respeto_parrafo'}>Sentimos un profundo <br /> respeto hacia el medio ambiente, <br /> por ello, implantamos prácticas <br /> ambientales y santiarias que <br /> aseguran su protección.</p>
                    </div>
                    <div className="porque_elegirnos_wrapper">
                        <img src={razonPescadoYSaludImg} alt="razonPescadoYSaludImg" />
                        <p className={'porque_elegirnos_wrapper_title__parrafo pescado_y_salud_parrado'}>Pescado y salud</p>
                        <p className={'text_porque_elegirnos_descripcion_wrapper__parrafo text__porque_elegirnos_descripcion__parrafo'}>En Oversea nos preocupa su salud.<br /> El pescado es un componente que <br /> debe estar presenteen nuestra dieta, <br /> ya que nos aporta proteínas de gran <br /> calidad, vitaminas y minerales.</p>
                    </div>
                    <div className={'contenedor__boton_conoce_un_poco_mas'}>
                        <div className="rectangulo__boton conoce_un_poco_mas__boton ">
                            <a href="#" className={'enlace'} onClick={(e) => e.preventDefault}>
                                <p>Conoce un poco más <FontAwesomeIcon icon={faChevronRight} className={'arrow_rigth_chevron_boton_aquafrost_todos_los_derechos_reservados'} /></p>
                            </a>
                        </div>
                    </div>
                </section>
                <footer className={'contenedor_aquafrost_todos_los_derechos_reservados'}>
                    <img src={aquafrostLogoCompletoImg} alt="aquafrostLogoCompletoImg" className={'img_aquafrost_logo_completo'} />
                    <p className={'todos_los_derechos_reservados_parrado'}>Todos los derechos reservados</p>
                    <div className="contenedor_textos_enlaces_footer">
                        <div className="contenedor_sub_textos_enlaces_footer">
                            <p>Servicios</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'} />
                        </div>
                        <div className="contenedor_sub_textos_enlaces_footer contenedor_secciones_menu_final_esmpresa">
                            <p>Empresa</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'} />
                        </div>
                        <div className="contenedor_sub_textos_enlaces_footer contenedor_secciones_menu_final_mercados">
                            <p>Mercados</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'} />
                        </div>
                        <div className="contenedor_sub_textos_enlaces_footer contenedor_secciones_menu_final_blog">
                            <p>Blog</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'} />
                        </div>
                        <div className="contenedor_sub_textos_enlaces_footer contenedor_secciones_menu_final_contacto">
                            <p>Contacto</p>
                            <FontAwesomeIcon icon={faChevronDown} className={'arrow_rigth_chevron_boton_garantia_de_calidad'} />
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default App;
