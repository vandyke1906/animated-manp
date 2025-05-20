import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const links = [
    { href: 'https://www.facebook.com/denr-manp-pamo/', icon: <FaFacebook /> },
    { href: 'https://www.instagram.com/denr-manp-pamo/', icon: <FaInstagram /> },
    { href: 'https://www.tiktok.com/@denr-manp-pamo/', icon: <FaTiktok /> },
    { href: 'https://youtube.com/@denr-manp-pamo', icon: <FaYoutube /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-green-700 py-10 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row" >
                <div className="text-center text-sm md:text-left flex flex-col items-center " >
                    <h3 className="text-center text-white"><b>&copy; Mount Apo Geopark</b> 2025. All rights reserved.</h3>
                    <div className="flex items-center w-15 gap-2">
                        <img src="/img/manp.png" alt="manp" className="w-20" />
                        <img src="/img/logo.png" alt="logo" className="w-20" />
                        <img src="/img/asean-heritage-logo.png" alt="asean-heritage" className="w-20" />
                        <img src="/img/geopark-logo.png" alt="geopark" className="w-20" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex justify-center gap-4 md:justify-start">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white" >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <p className="text-center text-sm md:text-right">mtaponaturalpark@gmail.com</p>
                    <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right" >Privacy Policy</a>

                </div>
            </div>

        </footer>
    )
};

export default Footer;
