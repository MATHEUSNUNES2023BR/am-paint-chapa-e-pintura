import { Whatsapp, ContainerMain, HeroCarrousel, SubFraseMain } from "./style";
import pintura from "../../assets/images/pintura.jpeg"
import amassado from "../../assets/images/antes_e_depois.png"
import polimeto from "../../assets/images/polimento.jpeg"
import whatsapp from "../../assets/images/whatsapp.png"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export function Main(){
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return(
        <ContainerMain> 
            <HeroCarrousel>
                <Slider {...settings} className="slide">
                    <div className="container">
                        <h3>Pinturas</h3>
                        <img src={pintura} alt="" />
                    </div>

                    <div className="container">
                        <h3>Remoção de mossas sem pintar</h3>
                        <img src={amassado} alt="" />
                    </div>

                    <div className="container">
                        <h3>Polimentos</h3>
                        <img src={polimeto} alt="" />
                    </div>
                </Slider>
            </HeroCarrousel>

            <SubFraseMain>
                Oferecemos serviços de pintura, reparo de amassados e carroceria de primeira linha para deixar seu carro com aparência de novo.
            </SubFraseMain>

            <Whatsapp>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=351912566985&text=Ola,%20quero%20fazer%20um%20or%C3%A7amento">
                    <img src={whatsapp} alt="" />
                </a>
            </Whatsapp>
        </ContainerMain>
    )
}