import Card from './card/Card'
import products from './products.json'
import * as Styled from './Catalog.style'
import { Grid } from '@material-ui/core'

const Catalog = () => {
    return (<>
        <Styled.CatalogContainer>
            <h1>Productos</h1>
            <Styled.CardsContainer>
                <Grid container spacing={2}>
                    {products.map((product, i) => {
                        return (<>
                            <Grid xs={12} md={6} lg={4}>
                                <Card product={product} />
                            </Grid>
                        </>)
                    })}
                </Grid>
            </Styled.CardsContainer>
        </Styled.CatalogContainer>
    </>)
}
export default Catalog