import styled from "styled-components";

export const ContainerMain = styled.main`
    margin: 3vh 0;
    height: auto;
    display: grid;
`

export const SubFraseMain = styled.p`
    width: 85%;
    line-height: 6vw;
    font-size: 4.7vw;
    text-align: justify;
    font-family: "Roboto", sans-serif;
    color: #B7B7C7;
    margin: 0 auto;
    margin-bottom: 1vh;
    text-shadow: 0px 0px 2px gray;
    margin-top: 6vh;
    @media (min-width: 576px) {
        font-size: 4.2vw;
    }
    @media (min-width: 992px) {
        margin-top:2vh;
        line-height: 4vw;
        width: 70%;
        font-size: 1.8vw;
    }
`
export const HeroCarrousel = styled.div`
    width: 100vw;
    border-radius: 15px;
    margin: 0 auto;
    .slide{
        border: none;
        outline: none;
        width: 94%;
        margin-top: 3vh;
        display: block;
        margin: 0 auto;
        .slick-dots{
            ::before{
                color: white
            }
        }
    }
    .container{
        border: none;
        outline: none;
        padding: 0 4%;
        h3{
            color: aliceblue;
            font-size: calc(1rem + 2vw);
            font-family: "Poppins", sans-serif;
            text-align: start;
            text-transform:uppercase;
            margin-bottom: 2vh;
            border-bottom: 1px solid white;
        }
        img{
            margin: 0 auto;
            display: block;
            width: 100%;
            border-radius: 10px;
            height: 100%;
            border: none;
        }
    }
    @media (min-width: 576px) {
        width: 95vw;
        .container{
            h3{
                width:90%;
                margin: 0 auto;
                margin-bottom: 2vh;
            }
            img{
                width: 90%;
            }
        }
    }
    @media (min-width: 992px) {
        margin: 0;
        width: 35vw;
        height: 52vh;
        .slide{
            width: 100%;
            margin: 0;
        }
        .container{
            img{
                width: 80%;
            }
            h3{
                font-size: 2vw;
                width: 80%;
            }
        }
    }
`
export const Whatsapp = styled.div`
    position: fixed;
    bottom: 2vw;
    right: 8vw;
    cursor: pointer;
    img{
        width: 50px;
        opacity: 0.9;
    }
    @media (min-width: 576px) {
        img{
            width: 80px;
        }
    }
`
