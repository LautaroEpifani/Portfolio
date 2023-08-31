import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import video from "../../public/videos/videoLauu.mp4"


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-60 rounded-full bg-[#5e99ff]' />
            {/* <div className='w-1 sm:h-80 h-40 blue-gradient' /> */}
          </div>
      <motion.div
        variants={textVariant()}
      >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#5e99ff]'>Lautaro</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web and user interface <br className='sm:block hidden' /> developer.
            I work primarily with <br className='sm:block hidden' /> React Js and Node Js.
            </p>
          </div>
        </motion.div>
        
        <div className="mt-4 border-2 rounded-full w-64 sm:w-48">
       
          <video src={video} type="video/mp4" className="rounded-full"  autoPlay muted>
           
          </video>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-30 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className=''>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='h-0 w-0 border-x-8 border-x-transparent border-t-[16px] '
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
