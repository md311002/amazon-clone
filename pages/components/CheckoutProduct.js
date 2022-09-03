import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'


const CheckoutProduct = ({ id, price, category, title, description, image, rating, prime }) => {
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

    function removeItemFromBasket() {
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className='grid grid-cols-5 '>

            <Image src={image} height={200} width={200} objectFit='contain' />

            <div className='col-span-3 mx-5'>

                <p>{title}</p>

                <div className='flex'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => {
                            return (
                                <StarIcon key={i} className='h-5 text-yellow-500'></StarIcon>)
                        })}
                </div>
                <p className='text-xs my-2 line-clamp-2'>{description}</p>

                <p>{`$` + `${price}`}</p>

                {prime && (
                    <div className='flex items-center space-x-2'>
                        <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                        <p className='text-xs text-gray-500'>FREE Next Day Delivery</p>
                    </div>
                )}
            </div>

            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToCart} className='mx-auto md:text-sm   w-full active:from-yellow-500 p-2 text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm mt-2 focus:outline-none  '>Add To Basket</button>
                <button onClick={removeItemFromBasket} className='mx-auto md:text-sm   w-full active:from-yellow-500 p-2 text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm mt-2 focus:outline-none '>Remove From Basket</button>
            </div>



        </div>
    )
}

export default CheckoutProduct
