
import { Row } from 'reactstrap';
import { SolutionsArray } from '../../../utils/constants/Constants';

import * as Styled from './Solutions.style'
import { createStyles, makeStyles, Theme } from '@material-ui/core';

function Solutions() {
    
    const styleClass = makeStyles((theme: Theme) =>
        createStyles({
            root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            },
            containedPrimary: {
                backgroundColor: '#ca2929',
                '&:hover': {
                    backgroundColor: '#ac0f0f',
                }
            },
        }),
    );

    return (
        <Styled.Container id='solutions'>
            <Row>
                <Styled.Title>
                    <h1>Nuestras Soluciones</h1>
                    <p>Nuestros sensores y dispositivos de almacenamiento de datos en la nube aportan eficiencia y seguridad a sus procesos.</p>
                </Styled.Title>
            </Row>
            {SolutionsArray.map((item, i) => {
                return (
                    <Row>
                        <Styled.SolutionTitle>
                            <h2>{item.title}</h2>
                        {/* <Button className={styleClass().containedPrimary} variant="contained" color="primary" onClick={() => handleButton()}>{buttonMessage}</Button> */}
                        </Styled.SolutionTitle>
                        <Styled.Boxes>
                            {item.solutions?.map((solution) => {
                                return (
                                    <div className="card">
                                        <div className="face face1" >
                                            <div className="content">
                                                <span className="stars"></span>
                                                <div className='icon'>
                                                    <img alt={solution.title} src={solution.image} />
                                                </div>
                                                <p>{solution.caption}</p>
                                            </div>
                                        </div>
                                        <div className="face face2" id={solution.background}>
                                            <div className="transparent-background">
                                                <h2>{solution.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Styled.Boxes>
                    </Row>
                )
            })}
        </Styled.Container>
    )
}

export default Solutions