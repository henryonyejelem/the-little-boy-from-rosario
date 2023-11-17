import { motion, useTransform} from "framer-motion"
import Rosario from "../images/home/ROSARIO.png"
import Saudi from "../images/country flags/1x/Saudi Arabia.png"
import Mexico from "../images/country flags/1x/Mexico.png"
import Poland from "../images/country flags/1x/Poland.png"
import Aust from "../images/country flags/1x/Australia.png"
import Neth from "../images/country flags/1x/Netherlands.png"
import Crot from "../images/country flags/1x/Crotia.png"
import France from "../images/country flags/1x/France.png"
function Nav(props){
    return(
        <motion.div className="Nav sticky h-0 top-0 z-40 w-[100%]"
            initial={{opacity: 0, y: 60}}
            whileInView={{ opacity: 1, y: 40 }}
            transition={{ delay: 2, ease: "easeOut", duration: 6, type:"spring" }} 
            viewport={{ once: true }}     
        >  
            <div className="flex-col justify-center w-[70vw] mx-auto">         
                <div className="text-white text-center font-Kanit font-bold tracking-[3px] opacity-60 text-[6px]">THE LITTLE BOY FROM</div>
                <div className="w-[100%] flex justify-center"><img src = {Rosario} alt="" className="w-[15vw]"/></div>
            </div>
            <div className="flex justify-center gap-8 mt-8 relative w-[50vw] mx-auto">
                <motion.div className="absolute w-[45rem] bg-white h-[2px] top-[4.225rem] origin-left"
                    style = {{ scaleX: props.progress}}                    
                ></motion.div>
                <div className="flex-col justify-center">
                    <div className="flex justify-center"><img src={Saudi} alt="" className="h-[39px]"/></div>
                    <div className="text-white font-QatarBold text-center text-[9px] mt-[8px]">Saudi Arabia</div>
                    <div className="text-white tracking-tight text-center text-[13px] mt-[14px] font-semibold">Group C</div>
                </div>  
                <motion.div className="flex-col justify-center min-w-[70px]"
                    style = {{opacity : useTransform(props.progress, [0.22, 0.26], [0.05, 1])}}>
                    <div className="flex justify-center"><img src={Mexico} alt="" className="h-[39px]"/></div>
                    <div className="text-white font-QatarBold text-center text-[9px] mt-[8px]">Mexico</div>
                    <div className="text-white tracking-tight text-center text-[13px] mt-[14px] font-semibold">Group C</div>
                </motion.div> 
                <motion.div className="flex-col justify-center min-w-[70px]"
                    style = {{opacity : useTransform(props.progress, [0.39, 0.4], [0.05, 1]) }}
                >
                    <div className="flex justify-center"><img src={Poland} alt="" className="h-[39px]"/></div>
                    <div className="text-white font-QatarBold text-center text-[9px] mt-[8px]">Poland</div>
                    <div className="text-white tracking-tight text-center text-[13px] mt-[14px] font-semibold">Group C</div>
                </motion.div> 
                <motion.div className="flex-col justify-center min-w-[70px]"
                    style = {{opacity : useTransform(props.progress, [0.53, 0.54], [0.05, 1]) }}
                >
                    <div className="flex justify-center"><img src={Aust} alt="" className="h-[39px]"/></div>
                    <div className="text-white font-QatarBold text-center text-[9px] mt-[8px]">Australia</div>
                    <div className="text-white tracking-tight text-center text-[13px] mt-[14px] font-semibold">Round of 16</div>
                </motion.div> 
                <motion.div className="flex-col justify-center min-w-[70px]"
                    style = {{opacity : useTransform(props.progress, [0.68, 0.69], [0.05, 1]) }}
                >
                    <div className="flex justify-center"><img src={Neth} alt="" className="h-[39px]"/></div>
                    <div className="text-white font-QatarBold text-center text-[9px] mt-[8px]">Netherlands</div>
                    <div className="text-white tracking-tight text-center text-[13px] mt-[14px] font-semibold">Quartar Finals</div>
                </motion.div> 
                <motion.div className="flex-col justify-center min-w-[70px]"
                    style = {{opacity : useTransform(props.progress, [0.84, 0.85], [0.05, 1]) }}
                >
                    <div className="flex justify-center"><img src={Crot} alt="" className="h-[39px]"/></div>
                    <div className="text-white font-QatarBold text-center text-[9px] mt-[8px]">Crotia</div>
                    <div className="text-white tracking-tight text-center text-[13px] mt-[14px] font-semibold">Semi Finals</div>
                </motion.div> 
                <motion.div className="flex-col justify-center min-w-[70px]"
                    style = {{opacity : useTransform(props.progress, [0.99, 1], [0.05, 1]) }}
                >
                    <div className="flex justify-center"><img src={France} alt="" className="h-[39px]"/></div>
                    <div className="text-white font-QatarBold text-center text-[9px] mt-[8px]">France</div>
                    <div className="text-white tracking-tight text-center text-[13px] mt-[14px] font-semibold">Finals</div>
                </motion.div> 

            </div>

        </motion.div>
    )
}

export default Nav;