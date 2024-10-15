// src/app/Footer.js
const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Safe Place. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-4">
                    <li>
                        <a href="#" className="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#" className="">Contact Us</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;