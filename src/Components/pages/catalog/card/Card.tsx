import { Button } from "@material-ui/core";
import { Props } from "./Card.interface";
import * as Styled from './Card.style'

const Card = ({ product }: Props) => {

    const purchase = () => {
        const message = encodeURIComponent(`¡Hola! Quisiera obtener más información sobre el producto '${product.title.toLowerCase()}'. ¿Podrían brindarme detalles adicionales, por favor?`);
        const url = `https://wa.me/50688619545?text=${message}`;
        window.open(url, '_blank')
    }
    return (<>
        <Styled.CardContainer>
            <img alt='/images/empty.jpg' src={`/images/products/${product.imageUrl}` || '/images/empty.jpg'} />
            <section>
                <div className="title">
                    <h4>{product.title}</h4>
                    <span>{product.category}</span>
                </div>
                <p>{product.description}</p>
                <Button onClick={() => purchase()}>Cotizar</Button>
            </section>
        </Styled.CardContainer>
    </>)
}
export default Card;