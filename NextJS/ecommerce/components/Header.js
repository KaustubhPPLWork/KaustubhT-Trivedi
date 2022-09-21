import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
const Header = () => {
    return (
        <header>
            {/* Top Nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image
                        src={"https://links.papareact.com/f90"}
                        width={150}
                        height={40}
                        objectFit="contain"
                        className='cursor-pointer'
                    />
                </div>
                {/* Search */}
                <div className='hidden sm:flex items-center rounded-md h-10 flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                    <MagnifyingGlassIcon className='h-12 p-4' color='white' />
                </div>
                {/* Right */}
                <div className='text-white flex space-x-6 px-2 items-center text-xs mx-6 whitespace-nowrap md:text-sm'>
                    <div className='link'>
                        <p>Hello Kaustubh Trivedi</p>
                        <p className='font-extrabold md:text-sm'>Account & lists</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& orders</p>
                    </div>
                    <div className='link flex items-center relative'>
                        <ShoppingCartIcon className='h-10' />
                        <p className='font-extrabold md:text-sm'>Basket</p>
                    </div>
                </div>
            </div>
            {/* Bottom Nav */}
            <div></div>
        </header>
    )
}

export default Header