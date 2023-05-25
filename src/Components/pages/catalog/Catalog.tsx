import Card from './card/Card'
import products from './products.json'
import * as Styled from './Catalog.style'
import { Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Product } from './card/Card.interface'

const Catalog = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const categories: string[] = products.reduce((uniqueCategories: string[], product) => {
        if (!uniqueCategories.includes(product.category)) {
            uniqueCategories.push(product.category);
        }

        return uniqueCategories;
    }, []);
    categories.unshift('Todos');

    useEffect(() => {
        const filteredProductsTemp = selectedCategory === 'Todos' ? products : products.filter(
            (product) => product.category === selectedCategory
        );

        setFilteredProducts(filteredProductsTemp);
    }, [selectedCategory])

    return (<>
        <Styled.CatalogContainer>
            <h1>Productos</h1>
            <Styled.Categories>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}>
                            <button onClick={() => handleCategorySelect(category)}
                                className={`${category === selectedCategory ? 'active' : ''}`}>
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </Styled.Categories>
            <Styled.CardsContainer>
                <Grid container spacing={2}>
                    {filteredProducts.map((product, i) => {
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