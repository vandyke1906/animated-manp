/* eslint-disable react/prop-types */
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import { useNavigate } from "react-router";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass} >
    <img src={src} className={clipClass} />
  </div>

)
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div id="contact_us" className="my-20 min-h-96 w-screen  px-10">
    <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
      <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
        <ImageClipBox src="/img/contact-1.webp" clipClass="contact-clip-path-1"
        />
        <ImageClipBox src="/img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
        />
      </div>

      <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
        <ImageClipBox src="/img/swordman-partial.webp" clipClass="absolute md:scale-125"
        />
        <ImageClipBox src="/img/swordman.webp" clipClass="sword-man-clip-path md:scale-125"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="mb-10 font-general text-[10px] uppercase">
          Protect Mt. Apo — join us!
        </p>

        <AnimatedTitle
          //title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
          title="Let&#39;s <b>protect</b> <br />the beauty of <br /><b>Mt. Apo Natural Park</b> <br />for the future."
          className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
        />
        <div className="flex gap-4">
          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
          <Button onClick={() => navigate("/map")} title="view map" containerClass="mt-10 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" />
        </div>
      </div>
    </div>
  </div>
  )
};

export default Contact;
