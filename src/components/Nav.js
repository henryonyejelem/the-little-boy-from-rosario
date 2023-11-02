import Rosario from "../images/home/ROSARIO.png"

function Nav(){
    return(
        <div className="Nav bg-black">  
            <div className="flex-col justify-center w-[70vw] mx-auto">         
                <div className="text-white text-center font-Kanit font-bold tracking-[3px] opacity-60 text-[7px]">THE LITTLE BOY FROM</div>
                <div className="w-[100%] flex justify-center"><img src = {Rosario} alt="" className="w-[20vw]"/></div>
            </div>

            <div className="flex">

            </div>
        </div>
    )
}

export default Nav;