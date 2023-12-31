import { motion } from "framer-motion"
import logo from "../images/worldCup logo/Logo.png"
import left from "../images/assets/Left.png"
import right from "../images/assets/Right.png"
import scoreBG from "../images/assets/scoreBG.png"

import arg from "../images/country flags/3x/argentina.png"
import saud from "../images/country flags/3x/saudi.png"
import mex from "../images/country flags/3x/mexico.png"
import pol from "../images/country flags/3x/poland.png"
import aus from "../images/country flags/3x/australia.png"
import neth from "../images/country flags/3x/netherland.png"
import cro from "../images/country flags/3x/crotia.png"
import fran from "../images/country flags/3x/france.png"


function Section(props){
    let home;
    let away;
    if(props.Home === "Argentina"){
        home = arg;       
    }
    if(props.Home === "Saudi Arabia"){
        home = saud;       
    }
    if(props.Home === "Mexico"){
        home = mex;       
    }
    if(props.Home === "Poland"){
        home = pol;       
    }
    if(props.Home === "Australia"){
        home = aus;       
    }
    if(props.Home === "Netherland"){
        home = neth;       
    }
    if(props.Home === "Crotia"){
        home = cro;       
    }
    if(props.Home === "France"){
        home = fran;       
    }

    if(props.Away === "Argentina"){
        away = arg;       
    }
    if(props.Away === "Saudi Arabia"){
        away = saud;       
    }
    if(props.Away === "Mexico"){
        away = mex;       
    }
    if(props.Away === "Poland"){
        away = pol;       
    }
    if(props.Away === "Australia"){
        away = aus;       
    }
    if(props.Away === "Netherland"){
        away = neth;       
    }
    if(props.Away === "Crotia"){
        away = cro;       
    }
    if(props.Away === "France"){
        away = fran;       
    }

    return(
        <div>
            <motion.div
                initial = {{opacity : 0, y : 10}}
                whileInView = {{opacity : 0.8, y : 0}}
                viewport={{once : "true"}}
                transition = {{duration : 8, ease : "easeIn", type : "spring"}} 
            >
            <div className="font-QatarBold text-[1.75rem] text-white flex justify-center items-center gap-2">
                <img src={left} alt="" className="h-[14px] right-[360px] top-[11px]" />
                {props.Fixture}
                <img src={right} alt="" className="h-[14px] left-[360px] top-[11px]"/>
                
            </div>
            <div className="relative w-[100%] mt-5"
                initial = {{opacity : 0}}
                whileInView={{opacity : 1}}
                viewport={{once : "true"}}
                transition = {{delay : 1, duration : 3}}
            >
                <div className="font-QatarHeavy text-[2.75rem] text-white absolute top-[15%] right-[325px]">{props.Home}</div>
                <div className="flex justify-center w-[100%] relative"><img src = {logo} alt="" className="h-[8.5rem]"/></div>
                <div className="font-QatarHeavy text-[2.75rem] text-white absolute top-[15%] left-[325px]">{props.Away}</div>
            </div>
            </motion.div>

            <div className="text-center font-QatarHeavy text-[25px] text-white relative my-6">
                
                <div><motion.div 
                    initial = {{opacity : 0, y : 10}}
                    whileInView = {{opacity : 1, y : 0}}
                    viewport={{once : "true"}}
                    transition = {{delay : 2, duration : 1, ease : "easeInOut"}}

                >
                    {props.Score}
                </motion.div></div>
                <motion.div
                    initial = {{opacity : 0}}
                    whileInView = {{opacity : 1}}
                    viewport={{once : "true"}}
                    transition = {{delay : 0.5, duration : 3}}
                >
                    <div><img src={home} alt="" className="h-[170%] absolute top-0 right-[330px] -translate-y-[0.955rem]"/></div>
                    <div><img src={away} alt="" className="h-[170%] absolute top-0 left-[330px] -translate-y-[0.955rem]"/></div>
                </motion.div>
                
                <div className="flex justify-center"> 
                    <motion.img src={scoreBG} alt="" className="absolute top-0 -z-40 h-[100%]"
                        initial = {{scaleX : 0, opacity : 0}}
                        whileInView = {{scaleX : 1, opacity : 1}}
                        viewport={{once : "true"}}
                        transition = {{delay : 2, ease : "backInOut", duration : 1.5}}
                    />
                </div>
            </div>
            <motion.div className="px-[100px] text-white font-semibold text-[13px] w-[100%] flex justify-center text-center leading-6 tracking-tight"
               initial = {{opacity : 0, y : 10}}
               whileInView = {{opacity : 0.8, y : 0}}
               viewport={{once : "true"}}
               transition = {{delay : 3, duration : 5, ease : "easeIn", type : "spring"}} 
            >
                {props.children}
            </motion.div>
        </div>
    );
}
export default Section;