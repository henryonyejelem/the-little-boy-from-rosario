import {  motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";
import Section from "./Section";
import Nav from "./Nav";

import Sau_BG from "../images/saudiArabia/Background.png"
import Sau_Messi from "../images/saudiArabia/Messi.png"
import Mex_BG from  "../images/mexico/BG.png"
import Mex_Messi from  "../images/mexico/Messi.png"
import Pol_BG from "../images/poland/BG.png"
import Pol_Messi from "../images/poland/Messi.png"
import Pol_Ball from "../images/poland/Ball.png"
import Aus from "../images/australia/Background.png"
import Neth_BG from "../images/netherland/BG.png"
import Neth_Messi from "../images/netherland/Messi.png"
import Crot_Messi from "../images/crotia/Messi.png"
import Crot_Ball from "../images/crotia/Ball.png"
import Crot_BG from "../images/crotia/BG.png"
import Fra from "../images/france/Background.png"
import conf_L from "../images/assets/confetti_left.png"
import conf_R from "../images/assets/confetti_right.png"

function SectionList(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const dist = 1 / 6;
    const dist2 = dist / 2;
    
    const height = window.innerHeight;

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.13, 1])

    const SaudProgress = useTransform(scrollYProgress, [0, dist/2], [0, -height/4])

    const MexProgress = useTransform(scrollYProgress, [0, dist2, dist], [0, height/4, 0])
    const MexTProgress = useTransform(scrollYProgress, [0, dist2, dist, (dist2 + dist)], [0, 500, 0, -300])

    const PolProgress = useTransform(scrollYProgress, [dist, dist+dist2, dist*2], [0, height/4, 0])
    const PolTProgress = useTransform(scrollYProgress, [dist, dist+dist2, dist*2, (dist2 + dist*2)], [0, 500, 0, -200])

    const AustTProgress = useTransform(scrollYProgress, [dist*2, dist*2+dist2, dist*3, (dist*3 + dist2)], [0, 500, 0, -200])

    const NethProgress = useTransform(scrollYProgress, [dist*3, dist*3+dist2, dist*4], [0, height/4, 0])
    const NethTProgress = useTransform(scrollYProgress, [dist*3, dist*3+dist2, dist*4, (dist*4 + dist2)], [0, 500, 0, -200])

    const CrotTProgress = useTransform(scrollYProgress, [dist*4, dist*4+dist2, dist*5, (dist*5 + dist2)], [0, 500, 0, -200])

    const FraTProgress = useTransform(scrollYProgress, [dist*5, dist*5+dist2, dist*6], [0, 500, 0])



    return(
        <div className="SectionList relative" ref = {ref}>
            <Nav progress = {scaleProgress}/>
            <div className="">
                <div className = "SaudiArabia h-[100vh] relative">       
                    <img src ={Sau_BG} alt ="" className=" -z-50 absolute h-[100vh] object-cover"/> 
                    <motion.img src ={Sau_Messi} alt ="" className="absolute h-[80vh] -z-50 object-cover right-[125px] bottom-0"
                       initial = {{translateX : -50}}
                       whileInView = {{translateX : 0}}
                       transition={{duration : 17, delay : 3}}    
                    /> 
                    <motion.div className="absolute top-[38%] -z-50 w-[600px]"
                        style = {{translateY : SaudProgress}}
                    >        
                        <Section Home = "Argentina" Away = "Saudi Arabia" Score = "1 : 2" Penalty = "" Fixture = "Group C">
                            At the start of this World Cup, it looked like another trophyless campaign was on the cards when Saudi Arabia fought back from a Messi opener to beat the South Americans 2-1 in the first of many tournament upsets.
                        </Section> 
                    </motion.div>
                </div>
                <div className = "Mexico h-[100vh] relative">                   
                   <div> 
                    <img src ={Mex_BG} alt ="" className="absolute -z-40 h-[100vh] object-cover bottom-0" />   
                    <motion.img src ={Mex_Messi} alt ="" className="absolute -z-40 h-[75vh] left-0 bottom-0 object-cover"
                        initial = {{translateX : 50}}
                        whileInView = {{translateX : 120}}
                        transition={{duration : 20}} 

                        style = {{translateY : MexProgress}}
                    /> 
                    </div>

                    <motion.div className="absolute top-[38%] w-[600px] right-0"
                        style={{translateY : MexTProgress}}                        
                    >               
                        <Section Home = "Argentina" Away = "Mexico" Score = "2 - 0" Penalty = "" Fixture = "Group C">
                            Lionel Messi rescued Argentina from the brink of World Cup elimination, scoring the crucial opening goal in a 2-0 win over Mexico at Lusail Iconic Stadium in Qatar to put the South American champions back on track to reach the last 16.
                        </Section>
                    </motion.div>
                </div>
                <div className = "Poland h-[100vh] relative">
                    <img src ={Pol_BG} alt ="" className="absolute -z-40 h-[100vh] object-cover"/> 
                    <motion.img src ={Pol_Messi} alt ="" className="absolute -z-40 h-[73vh] object-cover bottom-0 right-0"
                        initial = {{translateX : 0}}
                        whileInView = {{translateX : -60}}
                        transition={{duration : 20, delay : 2}}

                        style={{translateY : PolProgress}}
                    /> 
                    <motion.img src ={Pol_Ball} alt ="" className="absolute -z-40 h-[8vh] object-cover bottom-0 right-[350px]"
                        initial = {{translateX : 0}}
                        whileInView = {{translateX : -120, delay : 2}}
                        transition={{duration : 20}}                    
                    />

                    <motion.div className="absolute top-[38%] w-[600px]"
                        style={{translateY : PolTProgress}} 
                    >               
                        <Section Home = "Poland" Away = "Argentina" Score = "0 - 2" Penalty = "" Fixture = "Group C">
                            Argentina made sure of their place in the round of 16 with a 2-0 victory over Poland at Stadium 974 on Wednesday. Poland, a well beaten side on this occasion, will join them in the knockout stages thanks to their superior goal difference over a Mexico side who also finished on four points.  
                        </Section>
                    </motion.div>
                </div>
                <div className = "Australia h-[100vh] relative">
                    <img src ={Aus} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>   
                    <motion.div className="absolute top-[38%] w-[600px]"
                        style = {{translateY : AustTProgress}}
                    >               
                        <Section Home = "Argentina" Away = "Australia" Score = "2 - 1" Penalty = "" Fixture = "Group C">
                            In his 1000th career appearance, Lionel Messi had his best match of the World Cup so far as Argentina took down Australia 2-1 to book their place in the quarterfinal against the Netherlands
                        </Section>
                    </motion.div>
                </div>
                <div className = "Netherland h-[100vh] relative">
                    <img src ={Neth_BG} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>   
                    <motion.img src ={Neth_Messi} alt ="" className="absolute -z-40 h-[70vh] object-cover bottom-0 left-0"
                        initial = {{translateX : 0}}
                        whileInView = {{translateX : 90}}
                        transition={{duration : 20}} 

                        style = {{translateY : NethProgress}}
                    />  
                    <motion.div className="absolute top-[38%] w-[600px] right-0"
                        style = {{translateY : NethTProgress}}
                    >               
                        <Section Home = "Netherland" Away = "Argentina" Score = "2 - 2" Penalty = "" Fixture = "Quartar Finals">
                            Argentina claimed a dramatic 4-3 penalty shootout victory over Netherlands on Friday to claim a spot in the World Cup semifinals after initially throwing away a two-goal lead in a late collapse in regulation time
                        </Section>
                    </motion.div>
                </div>
                <div className = "Crotia h-[100vh] relative overflow-clip">
                    <img src ={Crot_BG} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>
                    <motion.img src ={Crot_Ball} alt ="" className="absolute -z-40 h-[10vh] object-cover bottom-0 right-0"
                        initial = {{translateX : -550, translateY : -80, rotate : 0}}
                        whileInView = {{translateX : -500, translateY : -140, rotate : -50}}                       
                        transition={{duration : 20}}                     
                    />    
                    <motion.img src ={Crot_Messi} alt ="" className="absolute -z-40 h-[100vh] object-cover bottom-0 right-0"
                        initial = {{translateX : 0, translateY : 30}}
                        whileInView = {{translateX : 60, translateY : 0}}                        
                        transition={{duration : 20}} 
                    /> 
                    
                    <motion.div className="absolute top-[38%] w-[600px] right-0"
                        style = {{translateY : CrotTProgress}}
                    >               
                        <Section Home = "Argentina" Away = "Crotia" Score = "3 - 0" Penalty = "" Fixture = "Semi Finals">
                            Argentina and Lionel Messi have done it yet again. The South American powerhouse will play in the World Cup final after defeating Croatia 3-0.
                        </Section>
                    </motion.div>
                </div>
                <div className = "France h-[100vh] relative">
                    <img src ={Fra} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>  
                    <img src ={conf_L} alt ="" className="absolute -z-40 h-[100vh] object-cover opacity-60 left-0"/>   
                    <img src ={conf_R} alt ="" className="absolute -z-40 h-[100vh] object-cover opacity-60 right-0"/> 
                    <motion.div className="absolute top-[38%] w-[600px]"
                        style = {{translateY : FraTProgress}}
                    >               
                        <Section Home = "Argentina" Away = "France" Score = "2 - 2" Penalty = "" Fixture = "Finals">
                            Argentina beat France 4-2 on penalties to win the 2022 World Cup after a 3-3 draw in a thrilling final at the Lusail Stadium in Doha, Qatar, on Sunday. Argentina raced into a two-goal lead through Lionel Messi and Angel Di Maria before two Kylian Mbappe goals saw holders France pull level in spectacular fashion        
                        </Section>
                    </motion.div>
                </div>  
            </div>          
        </div>
    )
}
export default SectionList;