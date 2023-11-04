import Section from "./Section";
import Nav from "./Nav";
import Saudi from "../images/saudiArabia/Background.jpg"

function SectionList(){
    return(
        <div className="SectionList relative">
            <Nav/>
            <div className = "SaudiArabia h-[100vh] relative">       
                <img src ={Saudi} alt ="" className="absolute -z-40 h-[100vh] object-cover"/>        
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    At the start of this World Cup, it looked like another trophyless campaign was on the cards when Saudi Arabia fought back from a Messi opener to beat the South Americans 2-1 in the first of many tournament upsets.
                </Section>  
            </div>
            <div>
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    Lionel Messi rescued Argentina from the brink of World Cup elimination, scoring the crucial opening goal in a 2-0 win over Mexico at Lusail Iconic Stadium in Qatar to put the South American champions back on track to reach the last 16.
                </Section>
            </div>
            <div>
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    Argentina made sure of their place in the round of 16 with a 2-0 victory over Poland at Stadium 974 on Wednesday. Poland, a well beaten side on this occasion, will join them in the knockout stages thanks to their superior goal difference over a Mexico side who also finished on four points.  
                </Section>
            </div>
            <div>
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    In his 1000th career appearance, Lionel Messi had his best match of the World Cup so far as Argentina took down Australia 2-1 to book their place in the quarterfinal against the Netherlands
                </Section> 
            </div>
            <div>
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    Argentina claimed a dramatic 4-3 penalty shootout victory over Netherlands on Friday to claim a spot in the World Cup semifinals after initially throwing away a two-goal lead in a late collapse in regulation time
                </Section>
            </div>
            <div>
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    Argentina and Lionel Messi have done it yet again. The South American powerhouse will play in the World Cup final after defeating Croatia 3-0.
                </Section>
            </div>
            <div>
                <Section Home = "" Away = "" Score = "" Penalty = "" Fixture = "">
                    Argentina beat France 4-2 on penalties to win the 2022 World Cup after a 3-3 draw in a thrilling final at the Lusail Stadium in Doha, Qatar, on Sunday. Argentina raced into a two-goal lead through Lionel Messi and Angel Di Maria before two Kylian Mbappe goals saw holders France pull level in spectacular fashion        
                </Section>
            </div>
        </div>
    )
}

export default SectionList;