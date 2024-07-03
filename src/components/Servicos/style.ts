import { styled } from "styled-components";

export const ContainerServico = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    margin: 0 auto;
    padding: 4vw 0;
    h2{
        margin-top: 2vh;
        width: 65%;
        font-size: 7vw;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        color: #EAEAFD;
        @media (min-width: 576px) {
            font-size: 6vw;
        }
        @media (min-width: 1116px) {
            font-size: 2.5vw;
        }
    }
`
export const ServicosLista = styled.ul`
    display: flex;
    flex-direction: column;
    justify-items: center;
    list-style: none;
    margin-top: 1vh;
    li{
        span{
            color: #DCC707;
            margin-right: 5vw;
        }
        font-size: 5.5vw;
        font-family: "Roboto", sans-serif;
        border-top: 1px solid #EAEAFD;
        border-bottom: 1px solid #EAEAFD;
        padding: 1vh;
        color: #EAEAFD;
        margin: 2vh 0;
    }
    @media (min-width: 576px) {
        li{
            font-size: 4.5vw;
        }
    }
    @media (min-width: 1116px) {
        margin-top: 4vh;
        li{
            padding: 0.8vw;
            font-size: 2.2vw;
            padding-left: 3vw;
            span{
                color: #DCC707;
                margin-right: 2vw;
            }
        }
    }
`