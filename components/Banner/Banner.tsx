import Image from 'next/image';
import React from 'react';

const Banner = () => (
    <div>
        <div className="flex items-center justify-center max-w-11/12 mx-auto">
            <Image
                width={260}
                height={56}
                layout="responsive"
                className="rounded-md bg-cover"
                src="/img/img-banner1.jpg"
                alt="image banner"
            />
        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="mt-2">
                <Image
                    height={80}
                    width={80}
                    className="w-[80px]"
                    src="/img/logo.png"
                    alt="icon butik"
                />
            </div>
            <div className="my-4">
                <h1 className="text-2xl font-semibold text-gray-700">
                    Zahrazhafira
                </h1>
            </div>
        </div>
    </div>
);

export default Banner;
