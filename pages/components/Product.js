import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, price, category, title, description, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [prime] = useState(Math.random() < 0.5);
    const dispatch = useDispatch();

    function addItemToCart() {
        const Product = {
            id,
            price,
            category,
            title,
            description,
            image,
            prime,
            rating
        };

        dispatch(addToBasket(Product))
    }

    return (
        <div className='relative  flex m-5 flex-col bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

            <Image alt='fowfo' src={image} height={200} width={200} objectFit='contain'></Image>

            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {Array(rating).fill().map((_, index) => (
                    <StarIcon key={index} className='h-5 text-yellow-500'></StarIcon>
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <p>{`$` + `${price}`}</p>
            {prime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src="https://links.papareact.com/fdw" alt="Hii" />
                    <p className='text-xs text-gray-500 '>Free Next-day Delivery </p>
                </div>
            )}
            <button onClick={addItemToCart} className='mx-auto md:text-sm   w-full active:from-yellow-500 p-2 text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm mt-2 focus:outline-none  '>Add to Basket</button>
        </div>
    )
}

export default Product
