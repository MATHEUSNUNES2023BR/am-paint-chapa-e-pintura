import { ContainerServico, ServicosLista } from "./style";

export function Servicos(){
    return(
        <ContainerServico>
            <h2 id="servico">Serviços</h2>
            <ServicosLista>
                <li><span>01</span>Pintura de auto</li>
                <li><span>02</span>Martelinho de ouro/remoção de mossas sem Pintar</li>
                <li><span>03</span>Polimento</li>
                <li><span>04</span>Bate chapa e todo tipo de restauro</li>
                <li><span>05</span>Lavagem completa</li>
                <li><span>06</span>Mecanica rapida</li>
            </ServicosLista>
        </ContainerServico>
    )
}