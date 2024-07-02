import {HeaderContainer, NavLink } from "./style"

export function Header(){
    return(
        <HeaderContainer>
            <NavLink>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#servico">Serviços</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
            </NavLink>
        </HeaderContainer>
    )
}