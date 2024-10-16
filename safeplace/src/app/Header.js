// src/app/Header.js
import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed z-50 bg-primary w-full py-5 shadow-md">
            <nav className="container mx-auto flex justify-center gap-8 items-center">
                <Link legacyBehavior href="#top">
                    <h1 className="text-2xl font-bold text-white cursor-pointer">Safe Place</h1>
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