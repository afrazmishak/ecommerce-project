import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import './HomePage.css'
import { ProductsGrid } from './ProductsGrid'

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getHomeDate = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data)
        }
        getHomeDate()
    }, []);

    return (
        <>
            <title>Buy You Shopping</title>
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    )
}