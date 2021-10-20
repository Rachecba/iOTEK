
import { Row } from 'reactstrap';

import * as Styled from './SystemInfo.style'

function SystemInfo() {
    
    return (
        <Styled.Container id='system'>
            <Styled.Info>
                <h1>Nuestro Sistema</h1>
                <p>Diseñado para resolver los más importantes desafíos, como es el cuidado del manejo del producto
                    refrigerado y asegurar su cadena de frío. El mismo combina sensores inalámbricos con monitoreo 
                    remoto y una plataforma de funcionamiento autónoma. </p>
            </Styled.Info>
            <Styled.Boxes>
                <Styled.Box>
                    <img alt="sensor" src="assets/icons/motion-sensor.png" />
                    <h4>Sensores Inalámbricos</h4>
                    <p>Conecte en cualquier
                        ambiente refrigerado
                        que requiera
                        monitorear; cuartos 
                        fríos, bancos de 
                        sangre, sala de 
                        operaciones, 
                        laboratorios de 
                        control de 24/7 y en 
                        tiempo real </p>
                </Styled.Box>
                <Styled.Box>
                    <img alt="platform" src="assets/icons/analytics.png" className='platform'/>
                    <h4>Plataforma de Monitoreo</h4>
                    <p>Obtenga información 
                        proactiva y monitoreé
                        de forma remota el 
                        equipo para 
                        automatizar el 
                        registro de la 
                        temperatura y alertas 
                        por mensajes de texto
                        (SMS) en caso de 
                        incidentes</p>
                </Styled.Box>
                <Styled.Box>
                <img alt="analisis" src="assets/icons/analysis.png" className='analisis'/>
                    <h4>Análisis y <br/> Reportes</h4>
                    <p>Reportes programados
                        a su correo electrónico
                        en formato PDF con 
                        toda la información 
                        que su empresa 
                        requiere: registro de 
                        incidentes, 
                        temperatura, hora, 
                        fecha, promedio,
                        máximos y mínimos </p>
                </Styled.Box>
            </Styled.Boxes>
        </Styled.Container>
    )
}

export default SystemInfo