import styled from "styled-components";

export const ContainerMain = styled.main`
    margin: 3vh 0;
    height: auto;
    display: grid;
`
export const ContainerFraseHero = styled.div`
    display: grid;
    justify-content: center;
    @media (min-width: 576px){
        grid-template-columns: 500px 1fr;
    }
    @media (min-width: 1116px){
        grid-template-columns: calc(550px + 2vw) calc(440px + 2vw);

    }
`

export const Frase = styled.div`
    font-style: italic;
    margin: 0 auto;
    width: 90vw;
    margin-bottom: 4vh;
    h1{
            font-size: calc(2vw + 1.2rem);
            color: #fff;
            font-family: "Roboto", sans-serif;
            text-align: end;
            padding-bottom: 2vh;
        }
    p{
        margin-top: 1vh;
        font-size: calc(2vw + 0.7rem);
        font-family: "Roboto", sans-serif;
        color: #fff;
    }
    @media (min-width: 576px){
        order: 2;
        margin: 0;
        margin-top: 6vh;
        width: 85%;
        h1{
            font-size: calc(3.5vw + 1rem);
            color: #fff;
        }
        p{
            margin-top: 4vh;
            font-size: calc(1.8vw + 0.7rem);
            font-family: "Roboto", sans-serif;
            color: #fff;
            width: 80%;
            margin-left: auto;
            text-align: end;
        }
    }
    @media (min-width: 1116px){
        order: 2;
        margin-top: 10vh;
        width: 100%;
        h1{
            font-size: calc(1.5vw + 1rem);
            color: #fff;
            text-align: center;
        }
        p{
            margin-top: 5vh;
            font-size: calc(1.4vw + 0.4rem);
            font-family: "Roboto", sans-serif;
            color: #fff;
        }
    }
`
export const HeroCarrousel = styled.div`
    width: 100vw;
    border-radius: 15px;
    margin: 0 auto;
    .slide{
        border: none;
        outline: none;
        width: 95vw;
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
            color: #EAEAFD;
            font-size: calc(1.2rem + 2vw);
            font-family: "Bebas Neue", sans-serif;
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
        width: 100%;
        .container{
            h3{
                font-size: calc(1.4rem + 2vw);
                width:60%;
                margin-bottom: 2vh;
            }
            img{
                width: 60%;
                margin: 0;
            }
        }
    }
    @media (min-width: 1116px) {
        width: 100%;
        height: 52vh;
        .slide{
            width: 100%;
            margin: 0;
        }
        .container{
            img{
                width: 90%;
            }
            h3{
                font-size: 1.8vw;
                width: 90%;
            }
        }
    }
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
        margin-top: 100px;
        font-size: 4.2vw;
    }
    @media (min-width: 1116px) {
        margin-top:2vh;
        line-height: 3vw;
        width: 70%;
        font-size: 1.8vw;
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
