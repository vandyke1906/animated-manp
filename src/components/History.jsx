import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorner from "./RoundedCorner";
import Button from "./Button";
import { useNavigate } from "react-router";

const History = () => {
    const navigate = useNavigate();
    const frameRef = useRef(null);
    const handleMouse = () => {
        const element = frameRef.current;
        gsap.to(element, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3,
            ease: "power1.inOut",
        });
    };
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(element, {
            rotateX,
            rotateY,
            duration: 0.3,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };
    return (
        <section id="history" className="min-h-dvh w-screen bg-black text-blue-50" >
            <div className="flex size-full flex-col items-center py-10 pb-24" >
                <p className="font-general text-sm uppercase md:text-[10px]" >
                    The highest mountain in the Philippines
                </p>
                <div className="relative size-full" >
                    <AnimatedTitle
                        title="The st<b>o</b>ry of <br/> <b>Apo<b/> S<b>a</b>nd<b>a</b>w<b>a</b>"
                        sectionId="#history"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container" >
                        <div className="story-img-mask" >
                            <div className="story-img-content" >
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouse}
                                    onMouseUp={handleMouse}
                                    onMouseEnter={handleMouse}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.webp"
                                    alt="entrance"
                                    className="object-contain" />

                            </div>

                        </div>
                        <RoundedCorner />

                    </div>
                </div>
                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end" >
                    <div className="flex h-full w-fit flex-col items-center md:items-start" >
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start" >
                            Apo Sandawa holds cultural and spiritual significance for the Bagobo and Manobo people near Mount Apo.
                        </p>
                        <Button id="realm-btn" title="Discover More" containerClass="mt-5" onClick={() => navigate("/discover-more")} />

                    </div>

                </div>

            </div>
        </section>
    )
};

export default History;
