// src/app/Header.js
import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed z-50 bg-primary w-full py-5 shadow-md">
            <nav className="container mx-auto flex justify-center gap-8 items-center">
                <Link legacyBehavior href="#top">
                    <svg className='w-16 cursor-pointer hover:scale-105 transition-transform duration-300 ease-out' viewBox="0 0 111.49 112" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m95.87 17.37c-22.77-21.82-29.65 27.98-29.65 27.98l.19.2s50.12-3.99 29.65-27.98" /><path d="m111.49 56.13c-1.56-31.5-40.77-.02-40.77-.02v.28s39.17 31.52 40.77.02" /><path d="m96.25 95.05c20.41-24.05-29.72-27.9-29.72-27.9l-.19.2s7.01 49.79 29.72 27.9" /><path d="m15.62 17.37c22.77-21.82 29.65 27.98 29.65 27.98l-.19.2s-50.12-3.99-29.65-27.98" /><path d="m0 56.13c1.56-31.5 40.77-.02 40.77-.02v.28s-39.17 31.52-40.77.02" /><path d="m15.24 95.05c-20.41-24.05 29.72-27.9 29.72-27.9l.19.2s-7.01 49.79-29.72 27.9" /><path d="m55.61 0c-31.5 1.58 0 40.77 0 40.77h.28s31.5-39.19-.01-40.77" /><path d="m55.61 112c-31.5-1.58 0-40.77 0-40.77h.28s31.5 39.19 0 40.77" /><circle cx="55.74" cy="56" r="6.71" /></g></svg>
                </Link>
                <ul className="hidden lg:flex space-x-4 text-white">
                    <li>
                        <Link legacyBehavior href="#features">
                            <a className="hover:underline">Caractéristiques</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="#how-it-works">
                            <a className="hover:underline">Comment ça marche</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="#testimonials">
                            <a className="hover:underline">Témoignages</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="#download">
                            <a className="hover:underline">Télécharger</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;