import Image from 'next/image'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from './components/CheckoutProduct'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    const items = useSelector(selectItems);
    const { data: session } = useSession();
    const total = useSelector(selectTotal);

    async function createCheckoutSession() {
        const stripe = await stripePromise;

        const checkoutSession = await axios.post(
            '/api/create-checkout-session', {
            items: items,
            email: session.user.email
        }
        )

    }

    return (
        <div className='bg-gray-100'>
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-16">
                <div className='m-5 flex-grow shadow-sm'>
                    <Image
                        src='https://links.papareact.com/ikj'
                        width={1020}
                        height={250}
                        objectFit='contain'
                        alt='fojdfjo'
                    ></Image>
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='border-b pb-4 text-2xl'>
                            {items.length === 0 ?
                                'Your Shopping Basket is Empty' :
                                'Shopping Basket'
                            }
                        </h1>

                        {items.map((item, index) => {
                            return (
                                <CheckoutProduct
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    rating={item.rating}
                                    category={item.category}
                                    image={item.image}
                                    prime={item.prime} />
                            )
                        })}

                    </div>
                </div>

                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>
                                Subtotal ({items.length} items):
                                <span className='font-bold'>{`$` + `${total}`}</span>
                            </h2>
                            <button
                                role='link'
                                onClick={createCheckoutSession}
                                disabled={!session}
                                className={`mx-auto md:text-sm border-none  w-full active:from-gray-500 p-2 text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm mt-2 focus:outline-none    ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300'}`}>
                                {!session ? 'Sign In to Checkout' : 'Proceed to Checkout'}
                            </button>
                        </>
                    )}


                </div>
            </main>
        </div>
    )
}

export default Checkout
