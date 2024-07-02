import { styled } from "styled-components";

export const ContainerContato = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    margin: 0 auto;
    h2{
        margin-top: 6vh;
        width: 65%;
        font-size: 7.5vw;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        color: #EAEAFD;
    }
    @media (min-width: 576px) {
        h2{
            font-size: 6vw;
        }
    }
    @media (min-width: 992px) {
        h2{
            font-size: 2.5vw;
        }
    }
`
export const ContainerEndereco = styled.div`
    margin-top: 4vw;
    display: flex;
    align-self: center;
`
export const Endereco = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    margin: 6vw 0;
    img{
        width: 30px;
        margin-left: 8vw;
        margin-bottom: 2vw;
    }
    h4{
        padding-left: 4px;
        color: white;
        font-size: 1.2rem;
        font-family: "Roboto", sans-serif;
    }
    p{
        margin-top: 0.5vw;
        text-align: start;
        padding-top: 1vw;
        line-height: 5vw;
        font-size: 3.5vw;
        grid-column:  1 / -1;
        color: white;
    }
    @media (min-width: 576px) {
        margin: 0;
        margin-bottom: 8vw;
        grid-template-columns: 4vw 35vw;
        img{
            margin: 0;
            width: 40px;
        }
        h4{
            margin-left: 2vw;
            font-size: 2.2rem;
        }
    }
    @media (min-width: 992px) {
        margin: 0;
        margin-bottom: 2vw;
        grid-template-columns: 5% 50%;
        img{
            margin: 0;
            width: 60px;
        }
        h4{
            font-size: 2.5vw;
        }
        p{
            line-height: 3.4vw;
            padding: 0;
            font-size: 1.7vw;
            padding-left: 1.6vw;
        }
    }
`
export const Mapa = styled.div`
    margin-top: 1vh;
    margin-left: 2vw;
    iframe{
        display: block;
        margin: 0 auto;
        width: 190px;
        height: 180px;
        border-radius: 10px;
    }
    @media (min-width: 576px) {
        iframe{
            width: 400px;
            height: 300px;
        }
    }
    @media (min-width: 992px) {
        iframe{
            margin-top: 0;
            width: 32vw;
            height: 38vh;
        }
    }
`