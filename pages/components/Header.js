import Image from 'next/image'

import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"

function Header() {
    return (
        <header>
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='flex flex-grow sm:flex-grow-0  items-center mt-2 '>
                    <Image
                        src='https://links.papareact.com/f90'
                        height={40}
                        width={140}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                <div className='hidden cursor-pointer sm:flex items-center h-10  rounded-md flex-grow  bg-yellow-400 hover:bg-yellow-500'>
                    <input type="text" className='px-4 p-2 flex-grow flex-shrink rounded-l-md focus:outline-none' />
                    <SearchIcon className="h-12 p-4"></SearchIcon>
                </div>
                <div className='text-white flex space-x-6 mx-6 items-center text-xs  whitespace-nowrap'>
                    <div className='cursor-pointer hover:underline'>
                        <p>Hello Meet Dhabaliya</p>
                        <p className='font-extrabold'>Account & Lists</p>
                    </div>
                    <div className='cursor-pointer hover:underline'>
                        <p>Returns</p>
                        <p className='font-extrabold'>& Orders</p>
                    </div>
                    <div className='relative flex items-center cursor-pointer hover:underline'>
                        <span className='absolute top-0 right-0  md:right-10 bg-yellow-500 text-center text-black rounded-full h-4 w-4'>0</span>
                        <ShoppingCartIcon className='h-10'></ShoppingCartIcon>
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center bg-amazon_blue-light text-white text-sm p-2 pl-6 space-x-3'>
                <p className='cursor-pointer hover:underline flex items-center'>
                    <MenuIcon className='h-6 mr-1'></MenuIcon>
                    All
                </p>
                <p className='cursor-pointer hover:underline '>Prime Videos</p>
                <p className='cursor-pointer hover:underline '>Amazon Business</p>
                <p className='cursor-pointer hover:underline '>Today&apos;s Deals</p>
                <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Electronics</p>
                <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Food & Groceries</p>
                <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Prime</p>
                <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Buy Again</p>
                <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Shoper Toolkit</p>
                <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
