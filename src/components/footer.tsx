'use client'

import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer>
            <section className="bg-background p-10">
                <div className="container">
                    <div className="w-full">
                        <div className="flex flex-col justify-center lg:flex-row lg:justify-between w-full">
                            <div className="flex mb-10 items-center justify-between lg:mb-0">
                                <p className="lg:p-4">support by:</p>
                                <div className="ml-10">
                                    <div className="cursor-pointer" onClick={() => window.open('https://www.revoenergyshop.com/', '_blank', 'noopener,noreferrer')}>
                                        <Image layout="fixed" src="/partner_revo_revolution_energy_drink.png" className="" width={50} height={50} alt="logo partner" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="cursor-pointer" onClick={() => window.open('https://www.instagram.com/6mmrec/', '_blank', 'noopener,noreferrer')}>
                                    <FaInstagram className="text-4xl hover:opacity-90" />
                                </div>
                                <div className="cursor-pointer ml-8" onClick={() => window.open('https://www.instagram.com/6mmrec/', '_blank', 'noopener,noreferrer')}>
                                    <FaWhatsapp className="text-4xl hover:opacity-90" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center bg-black text-gray-700 p-2 text-sm">{'6mm © 2024'}</section>
        </footer>
    )
}