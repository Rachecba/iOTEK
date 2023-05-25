import { Button } from "@material-ui/core";
import { Props } from "./Card.interface";
import * as Styled from './Card.style'

const Card = ({ product }: Props) => {

    const purchase = () => {

    }
    return (<>
        <Styled.CardContainer>
            <img alt='/images/empty.jpg' src={`/images/products/${product.imageUrl}` || '/images/empty.jpg'} />
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