import Rosario from "../images/home/ROSARIO.png"
import Background from "../images/home/Background.jpg"

function Home(){
    return(
        <div className="Home h-[100vh] relative">  
            <div className="title absolute top-[47vh] left-[23px]">
                <div className="text-center text-white font-Kanit font-bold tracking-[3px] opacity-[30%] text-[14px]">THE LITTLE BOY FROM</div>
                <img src = {Rosario} alt="" className="w-[35vw]"/> 
            </div>
            <img src = {Background} alt="" className="h-[100vh] w-[100vw] object-cover"/>
            <div className="absolute bottom-5 text-[11px] font-SegoeUI font-bold tracking-[0.0155rem] text-white text-center left-[23px] w-[35vw]">Scroll Down</div>                     
        </div>
    )
}

export default Home;