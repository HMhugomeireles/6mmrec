'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="bg-[#000000] lg:bg-[#00000090] p-4 lg:p-4">
            <div className="lg:container">
                <div className="lg:p-0 lg:max-w-full">
                    <div className="relative flex items-center justify-between">
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <Button onClick={() => setIsMenuOpen(prev => !prev)} variant="link" className="relative inline-flex items-center justify-center select-none rounded-md p-2 opacity-85 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
  
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Button>
                        </div>
                        <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <div className="flex items-center text-white font-extrabold">
                                    <Image className="h-14 w-14" width={50} height={50} src="/6mm_logo.png" alt="logo 6mmm" />
                                    <div className="ml-2 text-2xl uppercase">6mm<span className="text-red-700">Rec</span></div>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="flex space-x-4 items-center">
                                    <Link href="/" className="rounded-md px-3 py-2 text-sm font-extrabold uppercase text-white" aria-current="page">News</Link>
                                    <Link href="/tournament" className="rounded-md px-3 py-2 text-sm font-extrabold uppercase text-gray-300 hover:border-background hover:text-white">Tournament</Link>
                                    <Link href="/partners" className="rounded-md px-3 py-2 text-sm font-extrabold uppercase text-gray-300 hover:bg-gray-700 hover:text-white">Partners</Link>
                                    <Link href="/shop" className="rounded-md px-3 py-2 text-sm font-extrabold uppercase text-gray-300 hover:bg-gray-700 hover:text-white">Shop</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-2 px-2 pb-3 pt-2">
                            <Link onClick={() => setIsMenuOpen(prev => !prev)} href="/" className="block rounded-md px-3 py-2 text-base font-extrabold uppercase text-white" aria-current="page">News</Link>
                            <Link onClick={() => setIsMenuOpen(prev => !prev)} href="/tournament" className="block rounded-md px-3 py-2 text-base font-extrabold uppercase text-gray-300 hover:bg-gray-700 hover:text-white">Tournament</Link>
                            <Link onClick={() => setIsMenuOpen(prev => !prev)} href="/partners" className="block rounded-md px-3 py-2 text-base font-extrabold uppercase text-gray-300 hover:bg-gray-700 hover:text-white">Partners</Link>
                            <Link onClick={() => setIsMenuOpen(prev => !prev)} href="/shop" className="block rounded-md px-3 py-2 text-base font-extrabold uppercase text-gray-300 hover:bg-gray-700 hover:text-white">Shop</Link>
                        </div>
                    </div>                    
                )}
            </div>

        </header>
    )
}