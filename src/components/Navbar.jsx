import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ['Home', 'About', 'Geosites', 'History', 'Contact Us'];

const Navbar = () => {
    const navContainerRef = useRef(null);
    const navMenuRef = useRef(null);
    const audioElementRef = useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
    const { y: currentScrollY } = useWindowScroll();
    const toggleAudioIndicator = () => {
        setIsAudioPlaying(prev => !prev);
        setIsIndicatorActive(prev => !prev);
    }
    useEffect(() => {
        if (currentScrollY === 0) {
            // setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
            navMenuRef.current.classList.remove('floating-nav-text');
        } else if (currentScrollY > lastScrollY) {
            // setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
            navMenuRef.current.classList.add('floating-nav-text');
        } else if (currentScrollY < lastScrollY) {
            // setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
            navMenuRef.current.classList.add('floating-nav-text');
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    }, [isNavVisible])

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }

    }, [isAudioPlaying])
    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6" >
            <header className="absolute top-1/2 w-full -translate-y-1/2" >
                <nav className="flex size-full items-center justify-between p-4" >
                    <div className="flex items-center gap-5" >
                        <img src="/img/logo.png" alt="logo" className="w-20" />
                        <img src="/img/geopark-logo.png" alt="logo-geopark" className="w-20" />
                        {/* <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" /> */}
                    </div>
                    
                    <div id="mobile-menu" className="flex h-full items-center">
                        <div ref={navMenuRef} className={`md:block text-black ${isNavMobileOpen ? 'block' : 'hidden'}`} >
                            {navItems.map((item, index) => (
                                <a key={index} href={`#${item.toLocaleLowerCase()}`} className="nav-hover-btn"  >
                                    {item}
                                </a>
                            ))}
                        </div>
                                                
                        <button className="mx-5 flex items-center space-x-0.5" onClick={toggleAudioIndicator} >
                            <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
                            {[1, 2, 3, 4].map(bar => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }} />
                            ))}
                        </button>

                        {/* for mobile */}
                        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false"
                        onClick={() => setIsNavMobileOpen((prev) => !prev)}
                        >
                            {isNavMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                        {/* for mobile */}

                        
                    </div>

                </nav>
            </header>
        </div>
    )
};

export default Navbar;
