import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const looping = false;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0)
    const totalVideos = 4
    const nextVideoRef = useRef(null)
    const upComingVideoIndex = (currentIndex % totalVideos) + 1
    const handleMiniVideoClick = () => {
        setHasClicked(true)
        setCurrentIndex(upComingVideoIndex)
    };
    const handleVideoLoaded = () => {
        setLoadedVideos(prev => prev + 1)
    }
    useEffect(()=>{
        if(loadedVideos === totalVideos-1){
            setIsLoading(false)
        }
    },[loadedVideos])
    useGSAP(() => {
        if (hasClicked) {
            gsap.set("#next-video", { visibility: "visible" })
            gsap.to("#next-video", {
                transformOrigin: ' center center',
                scale: 1,
                width: "100%",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                onStart: () => nextVideoRef.current.play(),
            })
            gsap.from("#current-video", {
                transformOrigin: ' center center',
                scale: 0,
                duration: 1.5,
                ease: "power1.inOut",
            })
        }

    }, { dependencies: [currentIndex], revertOnUpdate: true })

    useGSAP(()=>{
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0%, 72% 0%, 88% 90%, 0% 95%)",
            borderRadius: "0 0 40% 10%",
          });

        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0 0 0 0",
            ease: "power1.inOut",
            scrollTrigger:{
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            }
        })
    })
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
    return (
        <div id="home" className="relative h-dvh w-screen overflow-x-hidden" >
            {isLoading &&(
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50" >
                    <div className="three-body" >
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />

                    </div>
                </div>
            )}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75" >
                <div>
                    <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg" >
                        <div onClick={handleMiniVideoClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100" >
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upComingVideoIndex)}
                                loop={looping}
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center rounded-lg"
                                onLoadedData={handleVideoLoaded}
                                onEnded={() => setCurrentIndex((prev) => (prev % totalVideos) + 1)}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop={looping}
                        muted
                        id="next-video"
                        className="absolute-center invisible z-20 size-64 object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                        onEnded={() => setCurrentIndex((prev) => (prev % totalVideos) + 1)}
                    />
                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        loop={looping}
                        muted
                        autoPlay
                        className="absolute left-0 top-0 z-10 size-full object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                        onEnded={() => setCurrentIndex((prev) => (prev % totalVideos) + 1)}
                    />
                </div>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75" ><b>ASEAN</b> Heritage Park</h1>
                <div className="absolute left-0 top-0 z-40 size-full" >
                    <div className="mt-24 px-5 sm:px-10" >
                        <h1 className="special-font hero-heading text-blue-100" >MT. <b>APO</b> NATURAL PARK</h1>
                        <p className="mb-5 max-w-128 font-robert-regular text-blue-100">
                            Highest mountain peak in the Philippines with an elevation of 2,954 meters above sea level<br />and a land area of 65,900.9 hectares. 
                        </p>
                        <Button id='watch- trailer' title='Read More' leftIcon={<TiLocationArrow />} containerClass='bg-blue-300 flex-center gap-1' />
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black" ><b>ASEAN</b> Heritage Park</h1>
        </div>
    )
};

export default Hero;
