"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full">
            {/* Top Bar */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="inline-flex text-center hight-[21px] width-[54px] font-bold text-[16px] text-[#242424]"
                >
                    APURA
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/about" className="hover:text-blue-600">About</Link>
                    <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                    <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                </div>

                {/* Hamburger icons svg */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        //  Close icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-[10px] text-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-[10px] text-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col items-center space-y-4 py-6">
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
