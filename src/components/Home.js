import Rosario from "../images/home/ROSARIO.png"
import Background from "../images/home/Background.jpg"

function Home(){
    return(
        <div className="Home h-[100vh] relative">  
            <div className="title absolute top-[47vh]">
                <div className="text-center text-white font-Roboto font-bold tracking-wider opacity-[30%]">THE LITTLE BOY FROM</div>
                <img src = {Rosario} alt="" className="h-[12vh]"/> 
            </div>
            <img src = {Background} alt="" className="h-[100vh] w-[100vw] object-cover"/>
             
                     
        </div>
    )
}

export default Home;