import Section from "./Section";
import Nav from "./Nav";
import Sau from "../images/saudiArabia/Background.jpg"
import Mex from "../images/mexico/Background.png"
import Pol from "../images/poland/Background.png"
import Aus from "../images/australia/Background.png"
import Net from "../images/netherland/Background.png"
import Cro from "../images/crotia/Background.png"
import Fra from "../images/france/Background.png"

function SectionList(){
    return(
        <div className="SectionList relative">
            <Nav/>
            <div className = "SaudiArabia h-[100vh] relative">       
                <img src ={Sau} alt ="" className="absolute -z-40 h-[100vh] object-cover"/> 
                <div className="absolute translate-y-[40vh] w-[600px]">        
                    <Section Home = "Argentina" Away = "Saudi Arabia" Score = "1 : 2" Penalty = "" Fixture = "Group C">
                        At the start of this World Cup, it looked like another trophyless campaign was on the cards when Saudi Arabia fought back from a Messi opener to beat the South Americans 2-1 in the first of many tournament upsets.
                    </Section> 
                </div>
            </div>
            <div className = "Mexico h-[100vh] relative">
                <img src ={Mex} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>   
                <div className="absolute translate-y-[40vh] w-[600px] right-0">               
                    <Section Home = "Argentina" Away = "Mexico" Score = "2 - 0" Penalty = "" Fixture = "Group C">
                        Lionel Messi rescued Argentina from the brink of World Cup elimination, scoring the crucial opening goal in a 2-0 win over Mexico at Lusail Iconic Stadium in Qatar to put the South American champions back on track to reach the last 16.
                    </Section>
                </div>
            </div>
            <div className = "Mexico h-[100vh] relative">
                <img src ={Pol} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>   
                <div className="absolute translate-y-[40vh] w-[600px]">               
                    <Section Home = "Poland" Away = "Argentina" Score = "0 - 2" Penalty = "" Fixture = "Group C">
                        Argentina made sure of their place in the round of 16 with a 2-0 victory over Poland at Stadium 974 on Wednesday. Poland, a well beaten side on this occasion, will join them in the knockout stages thanks to their superior goal difference over a Mexico side who also finished on four points.  
                    </Section>
                </div>
            </div>
            <div className = "Mexico h-[100vh] relative">
                <img src ={Aus} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>   
                <div className="absolute translate-y-[40vh] w-[600px]">               
                    <Section Home = "Argentina" Away = "Australia" Score = "2 - 1" Penalty = "" Fixture = "Group C">
                        In his 1000th career appearance, Lionel Messi had his best match of the World Cup so far as Argentina took down Australia 2-1 to book their place in the quarterfinal against the Netherlands
                    </Section>
                </div>
            </div>
            <div className = "Mexico h-[100vh] relative">
                <img src ={Net} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>   
                <div className="absolute translate-y-[40vh] w-[600px] right-0">               
                    <Section Home = "Netherland" Away = "Argentina" Score = "2 - 2" Penalty = "" Fixture = "Quartar Finals">
                        Argentina claimed a dramatic 4-3 penalty shootout victory over Netherlands on Friday to claim a spot in the World Cup semifinals after initially throwing away a two-goal lead in a late collapse in regulation time
                    </Section>
                </div>
            </div>
            <div className = "Mexico h-[100vh] relative">
                <img src ={Cro} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>   
                <div className="absolute translate-y-[40vh] w-[600px] right-0">               
                    <Section Home = "Argentina" Away = "Crotia" Score = "3 - 0" Penalty = "" Fixture = "Semi Finals">
                        Argentina and Lionel Messi have done it yet again. The South American powerhouse will play in the World Cup final after defeating Croatia 3-0.
                    </Section>
                </div>
            </div>
            <div className = "Mexico h-[100vh] relative">
                <img src ={Fra} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>   
                <div className="absolute translate-y-[40vh] w-[600px]">               
                    <Section Home = "Argentina" Away = "France" Score = "2 - 2" Penalty = "" Fixture = "Finals">
                        Argentina beat France 4-2 on penalties to win the 2022 World Cup after a 3-3 draw in a thrilling final at the Lusail Stadium in Doha, Qatar, on Sunday. Argentina raced into a two-goal lead through Lionel Messi and Angel Di Maria before two Kylian Mbappe goals saw holders France pull level in spectacular fashion        
                    </Section>
                </div>
            </div>            
        </div>
    )
}

export default SectionList;
/*
<div>
            </div>
            <div>
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    
                </Section>
            </div>
            <div>
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    
                </Section>
            </div>*/