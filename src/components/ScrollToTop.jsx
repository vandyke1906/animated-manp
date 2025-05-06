import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300); // Show when scrolled past 300px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Ensures smooth scrolling
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-3 rounded-full primary-bg-color text-white shadow-lg transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Go to Top"
        >
            <FaArrowUp size={24} />
        </button>
    );
};

export default ScrollToTop;