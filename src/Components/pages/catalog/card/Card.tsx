import { Button } from "@material-ui/core";
import { Props } from "./Card.interface";
import * as Styled from './Card.style'

const Card = ({ product }: Props) => {

    const purchase = () => {

    }
    return (<>
        <Styled.CardContainer>
            <img alt='image' src={product.imageUrl} />
            <section>
                <h4>{product.title}</h4>
                <span>{product.category}</span>
                <p>{product.description}</p>
                <Button onClick={() => purchase()}>Cotizar</Button>
            </section>
        </Styled.CardContainer>
    </>)
}
export default Card;