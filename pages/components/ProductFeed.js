import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg-grid-col-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {products?.slice(0, 4).map(({ price, id, title, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    category={category}
                    image={image}
                    price={price}
                ></Product>))}
            <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />
            <div className='md:col-span-2'>
                {products?.slice(4, 5).map(({ price, id, title, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        category={category}
                        image={image}
                        price={price}
                    ></Product>))}
            </div>

            {products?.slice(5, products.length).map(({ price, id, title, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    category={category}
                    image={image}
                    price={price}
                ></Product>))}

        </div>
    )
}

export default ProductFeed
