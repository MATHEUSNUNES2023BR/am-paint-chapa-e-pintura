import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    height: 14vh;
    border-bottom: 1px solid white;
    @media (min-width: 1116px) {
        height: 12vh;
    }
    
`
export const NavLink = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
    justify-content: space-around;
    li{
        a{
            text-decoration: none;
            color: #EAEAFD;
            font-size: 1.4rem;
            font-family: "Bebas Neue", sans-serif;
            cursor: pointer;
        }
    }
    @media (min-width: 576px) {
        width: 80%;
        margin: 0 auto;
        li{
            a{
                font-size: 2.5rem;
                font-family: "Bebas Neue", sans-serif;
            }
        }
    }
    @media (min-width: 1116px) {
        width: 70%;
    }
   
`