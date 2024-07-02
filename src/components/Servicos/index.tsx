import { ContainerServico, ServicosLista } from "./style";

export function Servicos(){
    return(
        <ContainerServico>
            <h2 id="servico">Serviços</h2>
            <ServicosLista>
                <li><span>01</span>Pintura</li>
                <li><span>02</span>Martelinho de ouro/remoção de mossas sem Pintar</li>
            </ServicosLista>
        </ContainerServico>
    )
}