import { ContainerContato, ContainerEndereco, Endereco, Mapa } from "./style";
import telefone from "../../assets/images/telefone.svg"
import localizacao from "../../assets/images/localizao.svg"
export function Contato(){
    return(
        <ContainerContato>
            <h2  id="contato">Contato</h2>
            <ContainerEndereco>
                <div>
                    <Endereco>
                        <img src={telefone} alt="" />
                        <h4>Telemovel</h4>
                        <p>+351 912 566 985</p>
                    </Endereco>
                    <Endereco>
                        <img src={localizacao} alt="" />
                        <h4>Endereço</h4>
                        <p>R. Lameiro 164, Alcabideche, Cascais</p>
                    </Endereco>
                </div>
                <Mapa>
                    <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.2985353427916!2d-9.419763323340408!3d38.73391107175947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec4ff4b23b6b9%3A0xec80a7d12655e223!2sR.%20Lameiro%20164%2C%20Alcabideche%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1719705161203!5m2!1spt-BR!2sbr"></iframe>
                </Mapa>
            </ContainerEndereco>
        </ContainerContato>
    )
}