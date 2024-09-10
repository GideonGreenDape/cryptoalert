import Notification from "../assets/Notification.png"
import Email from "../assets/Email.png"
import SMS from "../assets/SMS.png"
import Phone from "../assets/Phone.png"
function LiveUpdates() {
    return(
        <div className="flex gap-[20px] pl-[25px]">
            <InfoCard />
            <TrendingCoinsCard />
            <NewsCard />
        </div>
    )
}


function InfoCard() {
    return(
        <div className="bg-white drop-shadow-3xl w-[31%] rounded-[8px] h-[200px]">
            <div className="flex items-center gap-[5px] pl-[10px] pt-[10px] ">
             <img className="w-[34px]" src={Notification} alt="Notification" />
              <p className="font-inter text-btnblue font-bold text-[14px] " >Get Instant Notification</p>
            </div>
           <div className="flex gap-[16px] ml-[90px] mt-[40px]">
           <img className="w-[34px]" src={Email} alt="Notification" />
           <img className="w-[40px]" src={SMS} alt="Notification" />
           <img className="w-[40px]" src={Phone} alt="Notification" />
           </div>
        </div>
    )
}

function TrendingCoinsCard() {
    return(
        <div className="bg-white drop-shadow-3xl w-[31%] rounded-[8px] h-[200px]">

        </div>
    )
}

function NewsCard() {
    return(
        <div className="bg-white drop-shadow-3xl w-[31%] rounded-[8px] h-[200px]">

        </div>
    )
}


export default LiveUpdates;