import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"
import Rosario from "../images/home/ROSARIO.png"
import Background from "../images/home/Background.jpg"
import Messi from "../images/home/Messi.png"
import BG from "../images/home/BG.png"

function Home(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    });

    const scaleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scaleTranslate = useTransform(scrollYProgress, [0, 1], [0, 400]);

    return(
        <div className="Home h-[100vh] relative overflow-clip bg-black">
            <motion.div className="" 
                ref={ref} 
                style = {{opacity : scaleOpacity}}         
            >  
                <motion.img src = {BG} alt="" className="h-[100vh] w-[100vw] object-cover"
                    initial = {{opacity: 0.5}}
                    animate = {{
                    opacity: 1
                    }} 
                    transition={{duration: 4}}
                />
                <motion.div className="title absolute top-[47vh] left-[23px]"
                    initial={{ 
                        opacity: 0,
                    }}
                    animate={{ 
                        opacity: 1,
                    }}
                    transition={{
                        delay:5,
                        duration:6
                    }}

                >
                    <div className="text-center text-white font-Kanit font-bold tracking-[3px] opacity-[30%] text-[14px]">THE LITTLE BOY FROM</div>
                    <img src = {Rosario} alt="" className="w-[35vw]"/> 
                </motion.div>
                <motion.img
                    src = {Messi}
                    className="h-[80vh] object-cover absolute bottom-0 right-0"
                    initial={{ 
                        opacity: 0.15,
                        x : 0,
                        scale: 1
                    }}
                    style = {{translateX: scaleTranslate}}
                    animate={{ 
                        opacity: 1,
                        x : -5,
                        scale: 1.05
                    }}
                    transition={{
                        delay:1,
                        duration:3
                    }}
                />  
                <motion.div className="absolute bottom-5 text-[11px] font-SegoeUI font-bold tracking-[0.0155rem] text-white text-center left-[23px] w-[35vw]"
                    initial = {{opacity: 0}}
                    animate = {{
                        y : [null, -10, 0],
                        opacity : 1
                    }}
                    transition={{
                        y: {delay:6, duration:1, repeat: Infinity, repeatDelay: 2}, 
                        opacity : {delay: 5, duration:1},
                        repeat: Infinity,
                    }}
                >
                    Scroll Down
                </motion.div>                     
            </motion.div>
        </div>
    )
}

export default Home;

/*
Save State--1
<div className="Home h-[100vh] relative">  
    <div className="title absolute top-[47vh] left-[23px]">
        <div className="text-center text-white font-Kanit font-bold tracking-[3px] opacity-[30%] text-[14px]">THE LITTLE BOY FROM</div>
        <img src = {Rosario} alt="" className="w-[35vw]"/> 
    </div>
    <img src = {Background} alt="" className="h-[100vh] w-[100vw] object-cover"/>
    <div className="absolute bottom-5 text-[11px] font-SegoeUI font-bold tracking-[0.0155rem] text-white text-center left-[23px] w-[35vw]">Scroll Down</div>                     
</div>
*/ 