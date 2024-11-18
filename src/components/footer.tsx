'use client'

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer>
            <section className="bg-background p-10">
                <div className="container">
                    <div className="w-full">
                        <div className="flex flex-col justify-center lg:flex-row lg:justify-between w-full">
                            <div className="flex justify-center">
                                <div className="cursor-pointer" onClick={() => window.open('https://www.instagram.com/6mmrec/', '_blank', 'noopener,noreferrer')}>
                                    <FaInstagram className="text-4xl hover:opacity-90" />
                                </div>
                                <div className="cursor-pointer ml-8" onClick={() => window.open('https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FFH1mrAJdqYPL3BzfKVBfdB&e=AT0fjEdM_qJN6RVOhBvuNSv5wTT1SFImiTpacellnuxiQSB1fREvy0NFChmO1XHAyH20gqyiqyl6e4-GwOqmsGi2Ijg3UbroGd0OZBDgwrxCJGieLVdNhQ', '_blank', 'noopener,noreferrer')}>
                                    <FaWhatsapp className="text-4xl hover:opacity-90" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center bg-black text-gray-700 p-2 text-sm">{'6mmrec © 2024'}</section>
        </footer>
    )
}