import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const links = [
    { href: 'https://www.facebook.com/denr-manp-pamo/', icon: <FaFacebook /> },
    { href: 'https://www.instagram.com/denr-manp-pamo/', icon: <FaInstagram /> },
    { href: 'https://www.tiktok.com/@denr-manp-pamo/', icon: <FaTiktok /> },
    { href: 'https://youtube.com/@denr-manp-pamo', icon: <FaYoutube /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-green-700 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row" >
                <p className="text-center text-sm md:text-left" >
                    &copy; DENR-MANP-PAMO 2025. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 md:justify-start" >
                    {links.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white" >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right" >Privacy Policy</a>
            </div>

        </footer>
    )
};

export default Footer;
