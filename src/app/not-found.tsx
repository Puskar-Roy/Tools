import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const page = () => {
    return (
        <div className='min-h-[64vh] flex justify-center items-center flex-col gap-6'>

            <Image src={'/404.svg'} height={400} width={400} alt='Not Found' />
            <h1 className='text-2xl font-semibold'>Whoops, that page is gone or not exists!</h1>
            <Button variant={'gooeyLeft'}>Go Home!</Button>

        </div>
    )
}

export default page