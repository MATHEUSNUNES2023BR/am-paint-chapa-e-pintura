import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #18181B;
        max-width: 1366px;
        width: 100%;
        margin: 0 auto;
    }
`
export default EstiloGlobal